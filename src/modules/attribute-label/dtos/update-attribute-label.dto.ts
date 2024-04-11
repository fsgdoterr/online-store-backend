import { IsString } from "class-validator";

export default class UpdateAttributeLabelDto {
    @IsString()
    title: string;
}