import { AllowNull, BelongsTo, Column, CreatedAt, DataType, Default, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import UserEntity from "../user/user.enity";
import CategoryEntity from "../category/category.entity";
import AttributeEntity from "../attribute/attribute.entity";
import CartItemEntity from "../cart-item/cart-item.entity";
import OrderItemEntity from "../order-item/order-item.entity";
import ProductImageEntity from "../product-image/product-image.entity";

@Table({
    tableName: 'products'
})
export default class ProductEntity extends Model {
    @AllowNull(false)
    @Column
    title: string;

    @Column({
        type: DataType.STRING(512)
    })
    excerpt: string;

    @Column({
        type: DataType.STRING(8192)
    })
    description: string;

    @AllowNull(false)
    @Column
    price: number;

    @Column
    discountPrice: number;

    @Default(1)
    @Column
    quantity: number;

    @Column
    deleted: boolean;

    @CreatedAt
    createdAt: Date;

    @ForeignKey(() => UserEntity)
    userId: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity;

    @ForeignKey(() => CategoryEntity)
    categoryId: number;

    @BelongsTo(() => CategoryEntity)
    category: CategoryEntity;

    @HasMany(() => AttributeEntity)
    attributes: AttributeEntity[];

    @HasMany(() => CartItemEntity)
    cartItems: CartItemEntity[];

    @HasMany(() => OrderItemEntity)
    orderItems: OrderItemEntity[];

    @HasMany(() => ProductImageEntity)
    images: ProductImageEntity[];
}