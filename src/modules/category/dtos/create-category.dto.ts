import { IsNumber, IsOptional, IsString } from "class-validator";

export default class CreateCategoryDto {
    @IsString()
    title: string;

    @IsNumber()
    @IsOptional()
    parentId: number;
}