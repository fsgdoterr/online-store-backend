import { AllowNull, BelongsTo, Column, CreatedAt, ForeignKey, Model, Table } from "sequelize-typescript";
import CategoryEntity from "../category/category.entity";
import { instanceToPlain } from "class-transformer";
import AttributeLabelResponseDto from "./attribute-label-response.dto";
import AttributeLabelPublicResponseDto from "./attribute-label-public-response.dto";

@Table({
    tableName: 'attribute_labels'
})
export default class AttributeLabelEntity extends Model {
    @AllowNull(false)
    @Column
    title: string;

    @CreatedAt
    createdAt: Date;

    @ForeignKey(() => CategoryEntity)
    categoryId: number;

    @BelongsTo(() => CategoryEntity)
    category: CategoryEntity;

    getResponseDto(modifier: 'public' | 'private' = 'private') {
        if(modifier === 'private')
            return instanceToPlain(new AttributeLabelResponseDto(this.dataValues));

        return instanceToPlain(new AttributeLabelPublicResponseDto(this.dataValues));
    }
}