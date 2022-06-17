import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './components/authentication/jwt.guard';
import { Permissions } from './decorators/permissions.decorator';
import { PermissionsGuard } from './guards/permissions.guard';

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
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    @Permissions('profile:read')
    @Get('profile')
    getProfile(@Request() req): { email: string } {
        return req.user;
    }
}
