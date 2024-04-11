import { BadRequestException, Injectable } from '@nestjs/common';
import { UserRepositoryService } from 'src/services/repositories/user-repository/user-repository.service';
import SignupDto from './dtos/signup.dto';
import { JwtService } from 'src/services/jwt/jwt.service';

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepositoryService,
        private readonly jwtService: JwtService,
    ) {}

    async signup(
        {email, password}: SignupDto,
    ) {
        const isExists = await this.userRepository.isEmailExists(email);

        if(isExists)
            throw new BadRequestException('A user with this email is already registered.');

        const newUser = await this.userRepository.register(email, password);

        const tokens = await this.jwtService.generateTokens(newUser.getResponseDto());

        return tokens;
    }

}
