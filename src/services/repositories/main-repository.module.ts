import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user-repository/user-repository.module';
import { CategoryRepositoryModule } from './category-repository/category-repository.module';

@Module({
    imports: [
        UserRepositoryModule,
        CategoryRepositoryModule
    ],
})
export class MainRepositoryModule {}
