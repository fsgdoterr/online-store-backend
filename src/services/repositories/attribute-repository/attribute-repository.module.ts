import { Module } from '@nestjs/common';
import { AttributeRepositoryService } from './attribute-repository.service';
import { DatabaseModule } from 'src/services/database/database.module';
import AttributeEntity from 'src/common/entities/attribute/attribute.entity';
import AttributeLabelEntity from 'src/common/entities/attribute-label/attribute-label.entity';

@Module({
  imports: [
    DatabaseModule.forFeature([AttributeEntity, AttributeLabelEntity]),
  ],
  providers: [AttributeRepositoryService],
  exports: [AttributeRepositoryService],
})
export class AttributeRepositoryModule {}
