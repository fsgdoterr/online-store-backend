import { AllowNull, BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import ProductEntity from "../product/product.entity";
import OrderEntity from "../order/order.entity";

@Table({
    tableName: 'order_items'
})
export default class OrderItemEntity extends Model {
    @AllowNull(false)
    @Column
    quantity: number;

    @AllowNull(false)
    @Column
    cost: number;

    @ForeignKey(() => ProductEntity)
    productId: number;
    
    @BelongsTo(() => ProductEntity)
    product: ProductEntity;
    
    @ForeignKey(() => OrderEntity)
    orderId: number;

    @BelongsTo(() => OrderEntity)
    order: OrderEntity;
}