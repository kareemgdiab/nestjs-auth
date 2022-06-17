import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Constant, ConstantSchema } from './constant.schema';
import { ConstantService } from './constant.service';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: Constant.name, schema: ConstantSchema },
        ]),
    ],
    providers: [ConstantService],
})
export class ConstantModule {}
