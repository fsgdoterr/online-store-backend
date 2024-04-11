import { Body, Controller, Get, Headers, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import AccessJwtGuard from 'src/common/guards/access-jwt.guard';
import { User } from 'src/common/decorators/user.decorator';
import ModerRoleGuard from 'src/common/guards/moder-role.guard';
import CreateCategoryDto from './dtos/create-category.dto';
import UpdateCategoryDto from './dtos/update-category.dto';
import { LimitOffset } from 'src/common/decorators/limit-offset.decorator';

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

    @Put('/:id')
    @UseGuards(AccessJwtGuard, ModerRoleGuard)
    async update(
        @Param('id') categoryId: string,
        @Body() dto: UpdateCategoryDto
    ) {
        return await this.categoryService.update(categoryId, dto);
    }

    @Get('/')
    async getAll(
        @LimitOffset([20, 0]) {limit, offset}
    ) {
        return await this.categoryService.getAll(limit, offset);
    }

    @Get('/getall')
    @UseGuards(AccessJwtGuard, ModerRoleGuard)
    async getAllForAdmin(
        @LimitOffset([20, 0]) {limit, offset}
    ) {
        return await this.categoryService.getAllForAdmin(limit, offset);
    }
}
