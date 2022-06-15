import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './components/authentication/jwt.guard';

/**
 * AppController - base controller for the application
 */
@ApiTags('Me')
@Controller()
export class AppController {
    /**
     * A simple endpoint to test the auth service.
     */
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard)
    @Get('profile')
    getProfile(@Request() req): { email: string } {
        return req.user;
    }
}
