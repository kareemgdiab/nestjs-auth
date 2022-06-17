import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, UpdateWriteOpResult } from 'mongoose';
import { Constant, ConstantDocument } from './constant.schema';

@Injectable()
export class ConstantService {
    constructor(
        @InjectModel(Constant.name)
        private constantModel: Model<ConstantDocument>,
    ) {}

    async findOne(
        filter: FilterQuery<ConstantDocument>,
    ): Promise<ConstantDocument | undefined> {
        return this.constantModel.findOne(filter);
    }

    async update(update: ConstantDocument): Promise<UpdateWriteOpResult> {
        return this.constantModel.updateOne({}, update);
    }
}
