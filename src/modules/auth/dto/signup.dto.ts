import { ApiProperty } from '@nestjs/swagger';

export class SignUpBodyDto {
    @ApiProperty({ example: 'example@gmail.com' })
    email: string;

    @ApiProperty({ example: '1234' })
    password: string;
}
