import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId, SchemaTypes } from 'mongoose';
import { User } from '../users/user.schema';

export type RefreshTokenDocument = RefreshToken & Document;

@Schema()
export class RefreshToken {
    @Prop({
        type: SchemaTypes.ObjectId,
        ref: User.name,
        required: true,
    })
    userId: ObjectId;

    @Prop({
        type: SchemaTypes.Boolean,
        default: false,
    })
    revoked: boolean;

    @Prop({
        type: SchemaTypes.Date,
        required: true,
    })
    expiresAt: Date;
}

export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
