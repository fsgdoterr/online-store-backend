import { IsString } from "class-validator";

export default class SigninDto {
    @IsString()
    email: string;
    
    @IsString()
    password:string;
}