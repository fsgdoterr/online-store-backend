import { Injectable } from '@nestjs/common';
import { AttributeRepositoryService } from 'src/services/repositories/attribute-repository/attribute-repository.service';

@Injectable()
export class AttributeLabelService {

    constructor(
        private readonly attrRepository: AttributeRepositoryService,
    ) {}

}
