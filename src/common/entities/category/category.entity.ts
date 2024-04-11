import { AllowNull, BelongsTo, Column, CreatedAt, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import UserEntity from "../user/user.enity";
import ProductEntity from "../product/product.entity";
import AttributeLabelEntity from "../attribute-label/attribute-label.entity";

@Table({
    tableName: 'categories'
})
export default class CategoryEntity extends Model {
    @AllowNull(false)
    @Column
    title: string;

    @CreatedAt
    createdAt: Date;

    @ForeignKey(() => CategoryEntity)
    parentId: number;

    @BelongsTo(() => CategoryEntity)
    parent: CategoryEntity;

    @HasMany(() => CategoryEntity)
    children: CategoryEntity[];

    @ForeignKey(() => UserEntity)
    userId: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity

    @HasMany(() => AttributeLabelEntity)
    labels: AttributeLabelEntity[];

    @HasMany(() => ProductEntity)
    products: ProductEntity[];
}