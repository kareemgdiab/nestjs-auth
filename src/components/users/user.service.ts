import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { CreateUserDto } from './dto/user.dto';
import { User, UserDocument } from './user.schema';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
    ) {}

    async find(filter: FilterQuery<UserDocument>): Promise<UserDocument[]> {
        return this.userModel.find(filter);
    }

    async findOne(
        filter: FilterQuery<UserDocument>,
    ): Promise<UserDocument | undefined> {
        return this.userModel.findOne(filter);
    }

    async create(user: CreateUserDto): Promise<UserDocument> {
        return this.userModel.create(user);
    }

    async delete(id: string): Promise<any> {
        return this.userModel.deleteOne({ _id: id });
    }
}
