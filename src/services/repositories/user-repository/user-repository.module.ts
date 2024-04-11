import { Module } from '@nestjs/common';
import { UserRepositoryService } from './user-repository.service';
import { DatabaseModule } from 'src/services/database/database.module';
import UserEntity from 'src/common/entities/user/user.enity';
import CartItemEntity from 'src/common/entities/cart-item/cart-item.entity';

@Module({
  imports: [
    DatabaseModule.forFeature([UserEntity, CartItemEntity])
  ],
  providers: [UserRepositoryService],
  exports: [UserRepositoryService],
})
export class UserRepositoryModule {}
