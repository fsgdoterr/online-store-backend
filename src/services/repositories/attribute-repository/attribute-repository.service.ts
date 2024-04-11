import { Injectable } from '@nestjs/common';
import InjectModel from 'src/common/decorators/inject-model.decorator';
import AttributeLabelEntity from 'src/common/entities/attribute-label/attribute-label.entity';
import AttributeEntity from 'src/common/entities/attribute/attribute.entity';

@Injectable()
export class AttributeRepositoryService {

    constructor(
        @InjectModel(AttributeLabelEntity)
        private readonly labelModel: typeof AttributeLabelEntity,
        @InjectModel(AttributeEntity)
        private readonly attrModel: typeof AttributeEntity,
    ) {}

    async createLabel(
        categoryId: string | number,
        title: string,
    ) {
        return await this.labelModel.create({
            categoryId,
            title,
        });
    }

    async getLabelById(
        labelId: string | number,
    ) {
        return await this.labelModel.findByPk(labelId);
    }

    async getLabelsByCategoryId(
        categoryId: string | number,
        limit: number,
        offset: number,
    ) {
        return await this.labelModel.findAll({
            where: {
                categoryId
            },
            limit, 
            offset
        })
    }

    async getAllLabels(
        limit: number,
        offset: number,
    ) {
        return await this.labelModel.findAll({
            limit, offset
        });
    }

    async createAttribute(
        labelId: string | number,
        productId: string | number,
        title: string,
    ) {
        return await this.labelModel.create({
            labelId,
            productId,
            title,
        });
    }

    async getAttributesByProductId(
        productId: string | number,
    ) {
        return await this.attrModel.findAll({where: { productId }});
    }

    async getAttributeById(
        attrId: string | number,
    ) {
        return await this.attrModel.findByPk(attrId);
    }

    getLabelModel() {
        return this.labelModel;
    }

    getAttributeModel() {
        return this.attrModel;
    }

}
