import { AllowNull, BelongsTo, Column, CreatedAt, ForeignKey, Model, Table } from "sequelize-typescript";
import ProductEntity from "../product/product.entity";
import UserEntity from "../user/user.enity";

@Table({
    tableName: 'product_images'
})
export default class ProductImageEntity extends Model {
    @AllowNull(false)
    @Column
    name: string;

    @CreatedAt
    createdAt: Date;

    @ForeignKey(() => ProductEntity)
    productId: number;

    @BelongsTo(() => ProductEntity)
    product: ProductEntity;

    @ForeignKey(() => UserEntity)
    userId: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity;   
}