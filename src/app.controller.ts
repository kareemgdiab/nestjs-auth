import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './components/authentication/jwt.guard';
import { Permissions } from './decorators/permissions.decorator';
import { PermissionsGuard } from './guards/permissions.guard';

/**
 * AppController - base controller for the application
 */
@ApiTags('Me')
@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    /**
     * A simple endpoint to test the auth service.
     */
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    @Permissions('profile:read')
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    /**
     * Dummy route to test permissions
     */
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    @Permissions('item:read')
    @Get('item')
    getItem() {
        return { name: 'test-item' };
    }

    /**
     * Dummy route to test permissions
     */
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    @Permissions('item:create')
    @Post('item')
    createItem() {
        return { created: true };
    }

    /**
     * Health check endpoint.
     */
    @Get('health')
    health(): string {
        return this.appService.health();
    }
}
