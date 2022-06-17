import {
    CanActivate,
    ExecutionContext,
    Injectable,
    NotFoundException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { RoleService } from '../components/role/role.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
    constructor(
        private readonly reflector: Reflector,
        private readonly roleService: RoleService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const routePermissions = this.reflector.get<string[]>(
            'permissions',
            context.getHandler(),
        );

        if (!routePermissions) {
            return true;
        }

        const request: Request = context.getArgByIndex(0);

        const role = await this.roleService.findOne({ _id: request.user.role });
        if (role == null) {
            throw new NotFoundException('Role not found');
        }

        const hasPermission = routePermissions.every((routePermission) =>
            role.permissions.includes(routePermission),
        );

        return hasPermission;
    }
}
