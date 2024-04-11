import { Body, Controller, HttpCode, HttpStatus, Post, Response } from '@nestjs/common';
import { AuthService } from './auth.service';
import SignupDto from './dtos/signup.dto';
import { ETime } from 'src/common/constants/time';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    async signup(
        @Body() dto: SignupDto,
        @Response({passthrough: true}) res,
    ) {
        const {accessToken, refreshToken} = await this.authService.signup(dto);
    
        res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: ETime.DAY * 7});

        return accessToken;
    }

}
