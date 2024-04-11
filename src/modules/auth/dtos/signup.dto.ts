import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export default class SignupDto {
    @IsEmail()
    email: string;

    @IsString()
    @MinLength(6)
    @MaxLength(24)
    password: string;
}