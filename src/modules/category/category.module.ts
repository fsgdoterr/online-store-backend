import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { AuthModule } from '../auth/auth.module';
import { CategoryRepositoryModule } from 'src/services/repositories/category-repository/category-repository.module';

@Module({
  imports: [
    AuthModule,
    CategoryRepositoryModule,
  ],
  controllers: [CategoryController],
  providers: [CategoryService]
})
export class CategoryModule {}
