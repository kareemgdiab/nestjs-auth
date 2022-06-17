import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, UpdateWriteOpResult } from 'mongoose';
import { CreateRoleDto } from './dto/role.dto';
import { Role, RoleDocument } from './role.schema';

@Injectable()
export class RoleService {
    constructor(
        @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
    ) {}

    async find(filter: FilterQuery<RoleDocument>): Promise<RoleDocument[]> {
        return this.roleModel.find(filter);
    }

    async findOne(
        filter: FilterQuery<RoleDocument>,
    ): Promise<RoleDocument | undefined> {
        return this.roleModel.findOne(filter);
    }

    async create(role: CreateRoleDto): Promise<RoleDocument> {
        return this.roleModel.create(role);
    }

    async update(
        id: string,
        role: CreateRoleDto,
    ): Promise<UpdateWriteOpResult> {
        return this.roleModel.updateOne({ _id: id }, role, {
            returnDocument: 'after',
        });
    }

    async delete(id: string): Promise<any> {
        return this.roleModel.deleteOne({ _id: id });
    }
}
