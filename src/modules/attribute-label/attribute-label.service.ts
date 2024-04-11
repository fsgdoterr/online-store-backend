import { BadRequestException, Injectable } from '@nestjs/common';
import { AttributeRepositoryService } from 'src/services/repositories/attribute-repository/attribute-repository.service';
import CreateAttributeLabelDto from './dtos/create-attribute-label.dto';
import UpdateAttributeLabelDto from './dtos/update-attribute-label.dto';

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

    async update(
        labelId: string,
        {title}: UpdateAttributeLabelDto
    ) {
        const label = await this.attrRepository.getLabelById(labelId);
        console.log(label);
        
        if(!label)
            throw new BadRequestException('Invalid id');

        label.title = title;

        await label.save();

        return label.getResponseDto();
    }

}
