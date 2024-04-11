import { Exclude } from "class-transformer";

export default class CategoryPublicResponseDto {
    id: number;
    title: string;
    parentId: number;
    
    @Exclude()
    userId: number;
    
    @Exclude()
    createdAt: Date;

    constructor(data: Partial<CategoryPublicResponseDto>) {
        Object.assign(this, data);
    }
}