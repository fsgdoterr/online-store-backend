import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from 'src/common/config/config';
import AttributeLabelEntity from 'src/common/entities/attribute-label/attribute-label.entity';
import AttributeEntity from 'src/common/entities/attribute/attribute.entity';
import CartItemEntity from 'src/common/entities/cart-item/cart-item.entity';
import CategoryEntity from 'src/common/entities/category/category.entity';
import OrderItemEntity from 'src/common/entities/order-item/order-item.entity';
import OrderEntity from 'src/common/entities/order/order.entity';
import ProductImageEntity from 'src/common/entities/product-image/product-image.entity';
import ProductEntity from 'src/common/entities/product/product.entity';
import UserEntity from 'src/common/entities/user/user.enity';
import { DatabaseModule } from 'src/services/database/database.module';
import { MainRepositoryModule } from 'src/services/repositories/main-repository.module';
import { AuthModule } from '../auth/auth.module';
import { CategoryModule } from '../category/category.module';

@Module({
    imports: [
        ConfigModule.forRoot(configOptions),
        DatabaseModule.forRoot([
            UserEntity,
            CategoryEntity,
            AttributeLabelEntity,
            ProductEntity,
            ProductImageEntity,
            AttributeEntity,
            CartItemEntity,
            OrderEntity,
            OrderItemEntity
        ]),
        MainRepositoryModule,
        AuthModule,
        CategoryModule,
    ],
})
export class AppModule {}
