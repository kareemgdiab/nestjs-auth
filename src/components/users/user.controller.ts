import { Controller, Delete, Get, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Permissions } from '../../decorators/permissions.decorator';
import { PermissionsGuard } from '../../guards/permissions.guard';
import { JwtAuthGuard } from '../authentication/jwt.guard';
import { UserDocument } from './user.schema';
import { UserService } from './user.service';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    /**
     * @permissions `user:read`
     * @description Returns all users with their permissions
     */
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    @Permissions('user:read')
    @Get()
    async find(): Promise<UserDocument[]> {
        return this.userService.find({});
    }

    /**
     * @permissions `user:delete`
     * @description Deletes user
     */
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    @Permissions('user:delete')
    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<any> {
        return this.userService.delete(id);
    }
}
