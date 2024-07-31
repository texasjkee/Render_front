import { ApiProperty } from '@nestjs/swagger';

export class SignInBodyDto {
    @ApiProperty({ example: 'example@gmail.com' })
    email: string;

    @ApiProperty({ example: '1234' })
    password: string;
}
