export default class AttributeLabelResponseDto {
    id: number;
    title: string;
    createdAt: Date;
    categoryId: number;

    constructor(data: Partial<AttributeLabelResponseDto>) {
        Object.assign(this, data);
    }
}