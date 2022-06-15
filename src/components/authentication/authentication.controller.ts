import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthenticationService } from '../../components/authentication/authentication.service';
import { LocalAuthGuard } from '../../components/authentication/local.guard';
import { CreateUserDto } from '../users/dto/user.dto';
import { LoginCredentialsDto, RefreshTokenDto } from './dto/auth.dto';
import { JwtAuthGuard } from './jwt.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthenticationController {
    constructor(private readonly authService: AuthenticationService) {}

    @Post('/register')
    async register(@Body() user: CreateUserDto) {
        return this.authService.register(user);
    }

    @ApiBody({ type: LoginCredentialsDto })
    @UseGuards(LocalAuthGuard)
    @Post('/login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @Post('/refresh')
    public async refresh(@Body() body: RefreshTokenDto) {
        return this.authService.refreshAccessToken(body.refreshToken);
    }

    @ApiBearerAuth()
    @Post('/logout')
    @UseGuards(JwtAuthGuard)
    async logout(@Request() req) {
        return this.authService.logout(req.user);
    }
}
