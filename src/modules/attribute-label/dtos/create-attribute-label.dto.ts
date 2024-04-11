import { IsNumber, IsString } from "class-validator";

export default class CreateAttributeLabelDto {
    @IsString()
    title: string;

    @IsNumber()
    categoryId: string;
}