import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { AttributeLabelService } from './attribute-label.service';
import AccessJwtGuard from 'src/common/guards/access-jwt.guard';
import ModerRoleGuard from 'src/common/guards/moder-role.guard';
import { User } from 'src/common/decorators/user.decorator';
import CreateAttributeLabelDto from './dtos/create-attribute-label.dto';

@Controller('attribute-label')
export class AttributeLabelController {

    constructor(private readonly attrLabelService: AttributeLabelService) {}

    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AccessJwtGuard, ModerRoleGuard)
    async create(
        @Body() dto: CreateAttributeLabelDto,
    ) {
        return await this.attrLabelService.create(dto);
    }

}
