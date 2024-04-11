import { Module } from '@nestjs/common';
import { UserRepositoryModule } from './user-repository/user-repository.module';
import { CategoryRepositoryModule } from './category-repository/category-repository.module';
import { AttributeRepositoryModule } from './attribute-repository/attribute-repository.module';

@Module({
    imports: [
        UserRepositoryModule,
        CategoryRepositoryModule,
        AttributeRepositoryModule
    ],
})
export class MainRepositoryModule {}
