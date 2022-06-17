import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { UpdateWriteOpResult } from 'mongoose';
import { Permissions } from '../../decorators/permissions.decorator';
import { PermissionsGuard } from '../../guards/permissions.guard';
import { JwtAuthGuard } from '../authentication/jwt.guard';
import { CreateRoleDto } from './dto/role.dto';
import { RoleDocument } from './role.schema';
import { RoleService } from './role.service';

@ApiTags('Roles')
@Controller('roles')
export class RoleController {
    constructor(private readonly roleService: RoleService) {}

    /**
     * @permissions `role:read`
     * @description Returns all roles with their permissions
     * @access Endpoint not secured by permission for testing purpose only
     */
    // @UseGuards(JwtAuthGuard, PermissionsGuard)
    // @Permissions('role:read')
    @Get()
    async find(): Promise<RoleDocument[]> {
        return this.roleService.find({});
    }

    /**
     * @permissions `role:create`
     * @description Creates new role with permissions
     * @access Endpoint not secured by permission for testing purpose only
     */
    // @UseGuards(JwtAuthGuard, PermissionsGuard)
    // @Permissions('role:create')
    @Post()
    async create(@Body() role: CreateRoleDto): Promise<RoleDocument> {
        return this.roleService.create(role);
    }

    /**
     * @permissions `role:update`
     * @description Updates role with permission
     * @access Endpoint not secured by permission for testing purpose only
     */
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    // @Permissions('role:update')
    @Put('/:id')
    async update(
        @Param('id') id: string,
        @Body() role: CreateRoleDto,
    ): Promise<UpdateWriteOpResult> {
        return this.roleService.update(id, role);
    }

    /**
     * @permissions `role:delete`
     * @description Deletes role
     * @access Endpoint not secured by permission for testing purpose only
     */
    @ApiBearerAuth()
    @UseGuards(JwtAuthGuard, PermissionsGuard)
    // @Permissions('role:delete')
    @Delete('/:id')
    async delete(@Param('id') id: string): Promise<any> {
        return this.roleService.delete(id);
    }
}
