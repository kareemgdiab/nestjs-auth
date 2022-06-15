import { ConfigModule } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { ENVFILE } from '../../constants';
import { DatabaseModule } from '../database/database.module';
import { RefreshTokenModule } from './refreshToken.module';
import { RefreshTokenService } from './refreshToken.service';

describe('RefreshTokenService', () => {
    let service: RefreshTokenService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [
                ConfigModule.forRoot({
                    envFilePath: ENVFILE,
                    isGlobal: true,
                }),
                DatabaseModule,
                RefreshTokenModule,
            ],
        }).compile();

        service = module.get<RefreshTokenService>(RefreshTokenService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
