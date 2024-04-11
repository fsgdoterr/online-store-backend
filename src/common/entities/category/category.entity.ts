import { AllowNull, BelongsTo, Column, CreatedAt, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import UserEntity from "../user/user.enity";
import ProductEntity from "../product/product.entity";
import AttributeLabelEntity from "../attribute-label/attribute-label.entity";
import { instanceToPlain } from "class-transformer";
import CategoryResponseDto from "./category-response.dto";
import CategoryPublicResponseDto from "./category-public-response.dto";

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

    getResponseDto(modifier: 'public' | 'private' = 'private') {
        if(modifier === 'private')
            return instanceToPlain(new CategoryResponseDto(this.dataValues));
        
        return instanceToPlain(new CategoryPublicResponseDto(this.dataValues));
    }
}