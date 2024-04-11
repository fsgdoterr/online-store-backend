import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import AccessJwtGuard from 'src/common/guards/access-jwt.guard';
import { User } from 'src/common/decorators/user.decorator';
import ModerRoleGuard from 'src/common/guards/moder-role.guard';
import CreateCategoryDto from './dtos/create-category.dto';

@Controller('category')
export class CategoryController {

    constructor(private readonly categoryService: CategoryService) {}

    @Post('/')
    @HttpCode(HttpStatus.CREATED)
    @UseGuards(AccessJwtGuard, ModerRoleGuard)
    async create(
        @User('id') userId: string,
        @Body() dto: CreateCategoryDto
    ) {
        return await this.categoryService.create(userId, dto);
    }

}
