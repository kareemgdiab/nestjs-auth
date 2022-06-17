import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { ConfigService } from '@nestjs/config';
import { EnvKeys } from '../../constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authService: AuthenticationService,
        private config: ConfigService,
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.get(EnvKeys.JWT_SECRET),
        });
    }

    async validate(payload: any) {
        await this.authService.validateTokenForUser(payload);
        return {
            userId: payload.sub,
            email: payload.email,
            tokenId: payload.tokenId,
            role: payload.role,
        };
    }
}
