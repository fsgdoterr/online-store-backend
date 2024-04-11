import { Controller } from '@nestjs/common';
import { AttributeLabelService } from './attribute-label.service';

@Controller('attribute-label')
export class AttributeLabelController {

    constructor(private readonly attrLabelService: AttributeLabelService) {}

}
