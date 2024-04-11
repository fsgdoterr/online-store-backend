import { Body, Controller, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AttributeLabelService } from './attribute-label.service';
import AccessJwtGuard from 'src/common/guards/access-jwt.guard';
import ModerRoleGuard from 'src/common/guards/moder-role.guard';
import { User } from 'src/common/decorators/user.decorator';
import CreateAttributeLabelDto from './dtos/create-attribute-label.dto';
import UpdateAttributeLabelDto from './dtos/update-attribute-label.dto';

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

    @Put('/:id')
    @UseGuards(AccessJwtGuard,ModerRoleGuard)
    async update(
        @Param('id') labelId: string,
        @Body() dto: UpdateAttributeLabelDto
    ) {
        return await this.attrLabelService.update(labelId, dto);
    }
}
