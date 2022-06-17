import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { DatabaseModule } from './components/database/database.module';
import { RoleModule } from './components/role/role.module';
import { UserModule } from './components/users/user.module';
import { ENVFILE } from './constants';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ENVFILE,
            isGlobal: true,
        }),
        DatabaseModule,
        AuthenticationModule,
        UserModule,
        RoleModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
