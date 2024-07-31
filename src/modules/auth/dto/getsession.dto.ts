import { ApiProperty } from '@nestjs/swagger';

export class GetSessionInfoDto {
    @ApiProperty()
    id: number;

    @ApiProperty()
    email: string;
}
