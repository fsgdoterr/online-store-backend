import { Module } from '@nestjs/common';
import { CategoryRepositoryService } from './category-repository.service';
import { DatabaseModule } from 'src/services/database/database.module';
import CategoryEntity from 'src/common/entities/category/category.entity';

@Module({
  imports: [
    DatabaseModule.forFeature([CategoryEntity])
  ],
  providers: [CategoryRepositoryService],
  exports: [CategoryRepositoryService],
})
export class CategoryRepositoryModule {}
