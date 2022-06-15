import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, UpdateQuery, UpdateWriteOpResult } from 'mongoose';
import { RefreshToken, RefreshTokenDocument } from './refreshToken.schema';

@Injectable()
export class RefreshTokenService {
    constructor(
        @InjectModel(RefreshToken.name)
        private refreshTokenModel: Model<RefreshTokenDocument>,
    ) {}

    async findOne(
        filter: FilterQuery<RefreshTokenDocument>,
    ): Promise<RefreshTokenDocument | undefined> {
        return this.refreshTokenModel.findOne(filter);
    }

    async updateOne(
        filter: FilterQuery<RefreshTokenDocument>,
        update: UpdateQuery<RefreshTokenDocument>,
    ): Promise<UpdateWriteOpResult> {
        return this.refreshTokenModel.updateOne(filter, update);
    }

    async create(
        refreshToken: { userId: string },
        expiresAt: Date,
    ): Promise<RefreshTokenDocument> {
        return this.refreshTokenModel.create({ ...refreshToken, expiresAt });
    }
}
