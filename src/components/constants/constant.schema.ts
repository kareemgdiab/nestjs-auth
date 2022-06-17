import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConstantDocument = Constant & Document;

@Schema()
export class Constant {
    @Prop()
    permissions: string[];
}

export const ConstantSchema = SchemaFactory.createForClass(Constant);
