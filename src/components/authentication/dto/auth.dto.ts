import { ApiProperty } from '@nestjs/swagger';

export class RefreshTokenDto {
    @ApiProperty()
    readonly refreshToken: string;
}

export class LoginCredentialsDto {
    @ApiProperty()
    readonly email: string;
    @ApiProperty()
    readonly password: string;
}
