export default class CategoryResponseDto {
    id: number;
    title: string;
    parentId: number;
    userId: number;
    createdAt: Date;

    constructor(data: Partial<CategoryResponseDto>) {
        Object.assign(this, data);
    }
}