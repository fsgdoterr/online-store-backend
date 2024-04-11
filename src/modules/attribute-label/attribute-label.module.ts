import { Module } from '@nestjs/common';
import { AttributeLabelController } from './attribute-label.controller';
import { AttributeLabelService } from './attribute-label.service';
import { AttributeRepositoryModule } from 'src/services/repositories/attribute-repository/attribute-repository.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [
    AuthModule,
    AttributeRepositoryModule,
  ],
  controllers: [AttributeLabelController],
  providers: [AttributeLabelService]
})
export class AttributeLabelModule {}
