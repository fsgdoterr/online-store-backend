import { Body, Controller, Get, HttpCode, HttpStatus, Post, Response, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import SignupDto from './dtos/signup.dto';
import { ETime } from 'src/common/constants/time';
import SigninDto from './dtos/signin.dto';
import RefreshJwtGuard from 'src/common/guards/refresh-jwt.guard';
import { User } from 'src/common/decorators/user.decorator';

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

    @Post('/signin')
    async singnin(
        @Body() dto: SigninDto,
        @Response({passthrough: true}) res,
    ) {
        const {accessToken, refreshToken} = await this.authService.signin(dto);
    
        res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: ETime.DAY * 7});

        return accessToken;
    }

    @Get('/refresh')
    @UseGuards(RefreshJwtGuard)
    async refresh(
        @User('id') userId: string,
        @Response({passthrough: true}) res,
    ) {
        const {accessToken, refreshToken} = await this.authService.refresh(userId);
    
        res.cookie('refreshToken', refreshToken, {httpOnly: true, maxAge: ETime.DAY * 7});

        return accessToken;
    }

}
