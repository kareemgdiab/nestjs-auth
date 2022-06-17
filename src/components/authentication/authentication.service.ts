import {
    Injectable,
    NotFoundException,
    UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { RefreshTokenDocument } from '../refreshTokens/refreshToken.schema';
import { RefreshTokenService } from '../refreshTokens/refreshToken.service';
import { RoleService } from '../role/role.service';
import { CreateUserDto } from '../users/dto/user.dto';
import { UserDocument } from '../users/user.schema';
import { UserService } from '../users/user.service';

const DAY = 24 * 60 * 60 * 1000;

@Injectable()
export class AuthenticationService {
    constructor(
        private userService: UserService,
        private refreshTokenService: RefreshTokenService,
        private roleService: RoleService,
        private jwtService: JwtService,
    ) {}

    async validateTokenForUser(document: any) {
        const token = await this.refreshTokenService.findOne({
            _id: document.tokenId,
            userId: document.sub,
            expiresAt: { $gt: new Date() },
            revoked: false,
        });

        if (token == null) {
            throw new UnauthorizedException();
        }
    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.userService.findOne({ email });
        if (user == null) {
            throw new NotFoundException('User does not exist!');
        }

        if (await compare(pass, user.password)) {
            const { password, ...result } = user.toObject();
            return result;
        }

        return null;
    }

    async login(user: UserDocument) {
        let token = await this.refreshTokenService.findOne({
            userId: user._id,
            expiresAt: { $gt: new Date() },
            revoked: false,
        });

        if (token == null) {
            token = await this.refreshTokenService.create(
                {
                    userId: user._id,
                },
                new Date(Date.now() + 7 * DAY),
            );
        }

        const accessToken = this.generateAccessToken(user, token);
        const refreshToken = this.generateRefreshToken(token, 7 * DAY);

        return {
            accessToken,
            refreshToken,
        };
    }

    async register(user: CreateUserDto) {
        const role = await this.roleService.findOne({ _id: user.role });
        if (role == null) {
            throw new NotFoundException('Role does not exist!');
        }

        const nUser = await this.userService.create({
            email: user.email,
            password: await hash(user.password, 10),
            name: user.name,
            role: user.role,
        });

        const nRefreshToken = await this.refreshTokenService.create(
            {
                userId: nUser._id,
            },
            new Date(Date.now() + 7 * DAY),
        );

        const accessToken = this.generateAccessToken(nUser, nRefreshToken);
        const refreshToken = this.generateRefreshToken(nRefreshToken, 7 * DAY);

        return {
            accessToken,
            refreshToken,
        };
    }

    async refreshAccessToken(refreshToken: string) {
        let payload: any;
        try {
            payload = await this.jwtService.verifyAsync(refreshToken);
        } catch (error) {
            throw new UnauthorizedException(error.message);
        }
        const token = await this.refreshTokenService.findOne({
            _id: payload.tokenId,
            userId: payload.userId,
            expiresAt: { $gt: new Date() },
            revoked: false,
        });

        if (token == null) {
            throw new UnauthorizedException('Refresh token not found');
        }

        if (token.revoked === true) {
            throw new UnauthorizedException('Refresh token revoked');
        }

        const user = await this.userService.findOne({ _id: payload.userId });

        if (user == null) {
            throw new UnauthorizedException('User not found');
        }

        const accessToken = await this.generateAccessToken(user, token);
        return { accessToken };
    }

    async logout(payload: any) {
        const result = await this.refreshTokenService.updateOne(
            {
                _id: payload.tokenId,
                userId: payload.userId,
                revoked: false,
            },
            {
                $set: {
                    revoked: true,
                },
            },
        );
    }

    generateAccessToken(user: UserDocument, token: RefreshTokenDocument) {
        const payload = {
            email: user.email,
            sub: user._id,
            tokenId: token._id,
            role: user.role,
        };
        return this.jwtService.sign(payload, { expiresIn: '15m' });
    }

    generateRefreshToken(refreshToken: any, expiresIn: number) {
        const payload = {
            userId: refreshToken.userId,
            tokenId: refreshToken._id,
        };
        return this.jwtService.sign(payload, { expiresIn });
    }
}
