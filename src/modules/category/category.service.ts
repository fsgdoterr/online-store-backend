import { Injectable } from '@nestjs/common';
import { CategoryRepositoryService } from 'src/services/repositories/category-repository/category-repository.service';
import CreateCategoryDto from './dtos/create-category.dto';

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

}
