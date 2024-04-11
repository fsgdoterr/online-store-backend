import { Module } from '@nestjs/common';
import { AttributeLabelController } from './attribute-label.controller';
import { AttributeLabelService } from './attribute-label.service';
import { AttributeRepositoryModule } from 'src/services/repositories/attribute-repository/attribute-repository.module';

@Module({
  imports: [
    AttributeRepositoryModule,
  ],
  controllers: [AttributeLabelController],
  providers: [AttributeLabelService]
})
export class AttributeLabelModule {}
