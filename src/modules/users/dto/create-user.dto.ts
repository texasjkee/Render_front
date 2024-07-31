import { IsString, MinLength, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @MinLength(2)
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;
}
