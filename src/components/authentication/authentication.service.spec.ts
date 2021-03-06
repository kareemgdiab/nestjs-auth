import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ENVFILE } from '../../constants';
import { DatabaseModule } from '../database/database.module';
import { AuthenticationModule } from './authentication.module';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
    let service: AuthenticationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    envFilePath: ENVFILE,
                    isGlobal: true,
                }),
                DatabaseModule,
                AuthenticationModule,
            ],
        }).compile();

        service = module.get<AuthenticationService>(AuthenticationService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
