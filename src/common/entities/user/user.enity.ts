import { AllowNull, Column, CreatedAt, Default, HasMany, Model, Table, Unique } from "sequelize-typescript";
import { ERole } from "src/common/constants/role";
import CategoryEntity from "../category/category.entity";
import ProductEntity from "../product/product.entity";
import CartItemEntity from "../cart-item/cart-item.entity";
import OrderEntity from "../order/order.entity";
import ProductImageEntity from "../product-image/product-image.entity";
import { instanceToPlain } from "class-transformer";
import UserResponseDto from "./user-response.dto";

@Table({
    tableName: "users",
})
export default class UserEntity extends Model {
    @AllowNull(false)
    @Unique
    @Column
    email: string;

    @AllowNull(false)
    @Column
    password: string;

    @Default(ERole.USER)
    @Column
    role: ERole;

    @CreatedAt
    createdAt: Date;

    @HasMany(() => CategoryEntity)
    categories: CategoryEntity[];

    @HasMany(() => ProductEntity)
    products: ProductEntity[];

    @HasMany(() => CartItemEntity)
    cartItems: CartItemEntity[];

    @HasMany(() => OrderEntity)
    orders: OrderEntity[];

    @HasMany(() => ProductImageEntity)
    productImages: ProductImageEntity[];

    getResponseDto() {
        return instanceToPlain(new UserResponseDto(this.dataValues));
    }
}