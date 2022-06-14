import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthenticationService } from './components/authentication/authentication.service';
import { JwtAuthGuard } from './components/authentication/jwt.guard';
import { LocalAuthGuard } from './components/authentication/local.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthenticationService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
