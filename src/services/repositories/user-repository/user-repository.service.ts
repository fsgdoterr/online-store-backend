import { Injectable } from '@nestjs/common';
import InjectModel from 'src/common/decorators/inject-model.decorator';
import CartItemEntity from 'src/common/entities/cart-item/cart-item.entity';
import UserEntity from 'src/common/entities/user/user.enity';

@Injectable()
export class UserRepositoryService {
    constructor(
        @InjectModel(UserEntity)
        private readonly userModel: typeof UserEntity,
        @InjectModel(CartItemEntity)
        private readonly cartItemModel: typeof CartItemEntity,
    ) {}

}
