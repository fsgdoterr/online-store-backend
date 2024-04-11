import { Injectable } from '@nestjs/common';
import { ERole } from 'src/common/constants/role';
import InjectModel from 'src/common/decorators/inject-model.decorator';
import CartItemEntity from 'src/common/entities/cart-item/cart-item.entity';
import UserEntity from 'src/common/entities/user/user.enity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepositoryService {
    constructor(
        @InjectModel(UserEntity)
        private readonly userModel: typeof UserEntity,
        @InjectModel(CartItemEntity)
        private readonly cartItemModel: typeof CartItemEntity,
    ) {}

    async isEmailExists(email: string) {
        return !!(await this.userModel.findOne({where: { email }}));
    }

    async register(
        email: string,
        password: string,
        role: ERole = ERole.USER
    ) {
        const hashPassword = await bcrypt.hash(password, 10);
        const newUser = await this.userModel.create({
            email,
            password: hashPassword,
            role
        });

        return newUser;
    }

    async login(
        email: string,
        password: string,
    ) {
        const user = await this.userModel.findOne({where: { email }});
        if(!user) return false;

        const isPasswordEqual = await bcrypt.compare(password, user.password);
        if(!isPasswordEqual) return false;

        return user;
    }

    async getUserById(userId: string | number) {
        return await this.userModel.findByPk(userId);
    } 

    getUserModel() {
        return this.userModel;
    }

    getCartItemModel() {
        return this.cartItemModel;
    }

}
