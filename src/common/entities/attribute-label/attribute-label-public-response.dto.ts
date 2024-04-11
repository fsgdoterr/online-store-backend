import { Exclude } from "class-transformer";

export default class AttributeLabelPublicResponseDto {
    id: number;
    title: string;

    @Exclude()
    createdAt: Date;
    
    @Exclude()
    categoryId: number;

    constructor(data: Partial<AttributeLabelPublicResponseDto>) {
        Object.assign(this, data);
    }
}