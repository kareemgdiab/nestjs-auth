import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
    @ApiProperty()
    readonly name: string;

    @ApiProperty()
    readonly permissions: string[];
}
