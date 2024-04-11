import { BelongsTo, Column, CreatedAt, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import UserEntity from "../user/user.enity";
import OrderItemEntity from "../order-item/order-item.entity";

@Table({
    tableName: 'orders'
})
export default class OrderEntity extends Model {
    @CreatedAt
    createdAt: Date;

    @ForeignKey(() => UserEntity)
    userId: number;

    @BelongsTo(() => UserEntity)
    user: UserEntity;

    @HasMany(() => OrderItemEntity)
    items: OrderItemEntity[];
}