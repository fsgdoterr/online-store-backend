import { AllowNull, BelongsTo, Column, CreatedAt, ForeignKey, Model, Table } from "sequelize-typescript";
import ProductEntity from "../product/product.entity";

@Table({
    tableName: 'attributes'
})
export default class AttributeEntity extends Model {
    @AllowNull(false)
    @Column
    title: string;

    @CreatedAt
    createdAt: Date;

    @ForeignKey(() => ProductEntity)
    productId: number;

    @BelongsTo(() => ProductEntity)
    priduct: ProductEntity;
}