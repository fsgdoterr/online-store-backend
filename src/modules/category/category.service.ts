import { Injectable } from '@nestjs/common';
import { CategoryRepositoryService } from 'src/services/repositories/category-repository/category-repository.service';
import CreateCategoryDto from './dtos/create-category.dto';
import UpdateCategoryDto from './dtos/update-category.dto';

@Injectable()
export class CategoryService {

    constructor(private readonly catRepository: CategoryRepositoryService) {}

    async create(
        userId: number | string,
        {title, parentId}: CreateCategoryDto,
    ) {
        const newCategory = await this.catRepository.create(+userId, title, parentId);

        return newCategory.getResponseDto();
    }

    async update(
        catId: string | number,
        {title, parentId}: UpdateCategoryDto
    ) {
        const category = await this.catRepository.getById(catId);

        if(title) category.title = title;
        if(parentId) category.parentId = parentId;

        await category.save();

        return category.getResponseDto();
    }

}
