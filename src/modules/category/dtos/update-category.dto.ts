import { IsNumber, IsOptional, IsString } from "class-validator";

export default class UpdateCategoryDto {
    @IsString()
    @IsOptional()
    title: string;

    @IsNumber()
    @IsOptional()
    parentId: number;
}