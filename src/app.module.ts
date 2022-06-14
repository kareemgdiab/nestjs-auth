import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { UsersModule } from './components/users/users.module';

@Module({
  imports: [AuthenticationModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
