import { AllowNull, BelongsTo, Column, CreatedAt, ForeignKey, Model, Table } from "sequelize-typescript";
import CategoryEntity from "../category/category.entity";

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
}