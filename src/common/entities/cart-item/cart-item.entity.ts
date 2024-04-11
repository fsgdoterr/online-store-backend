import { BelongsTo, Column, Default, ForeignKey, Model, Table } from "sequelize-typescript";
import ProductEntity from "../product/product.entity";
import UserEntity from "../user/user.enity";

@Table({
    tableName: 'cart_items'
})
export default class CartItemEntity extends Model {
    @Default(1)
    @Column
    quantity: number;

    @ForeignKey(() => ProductEntity)
    productId: number;

    @BelongsTo(() => ProductEntity)
    product: ProductEntity;

    @ForeignKey(() => UserEntity)
    userId: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity;
}