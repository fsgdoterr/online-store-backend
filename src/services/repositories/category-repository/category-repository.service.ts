import { Injectable } from '@nestjs/common';
import InjectModel from 'src/common/decorators/inject-model.decorator';
import CategoryEntity from 'src/common/entities/category/category.entity';

@Injectable()
export class CategoryRepositoryService {

    constructor(
        @InjectModel(CategoryEntity)
        private readonly categoryModel: typeof CategoryEntity,
    ) {}

    getCategoryModel() {
        return this.categoryModel;
    }

}
