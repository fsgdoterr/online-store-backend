import { Injectable } from '@nestjs/common';
import { AttributeRepositoryService } from 'src/services/repositories/attribute-repository/attribute-repository.service';
import CreateAttributeLabelDto from './dtos/create-attribute-label.dto';

@Injectable()
export class AttributeLabelService {

    constructor(
        private readonly attrRepository: AttributeRepositoryService,
    ) {}

    async create(
        {title, categoryId}: CreateAttributeLabelDto,
    ) {
        const newAttributeLabel = await this.attrRepository.createLabel(categoryId, title);

        return newAttributeLabel.getResponseDto();
    }

}
