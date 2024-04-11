import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService as NestJwtService } from '@nestjs/jwt';
import { EEnvVariables } from 'src/common/constants/env-variables';
import { ETime } from 'src/common/constants/time';

@Injectable()
export class JwtService {

    constructor(
        private readonly jwt: NestJwtService,
        private readonly configService: ConfigService,
    ) {}

    getSecret() {
        return {
            atSecret: this.configService.get(EEnvVariables.ACCESS_SECRET),
            rtSecret: this.configService.get(EEnvVariables.REFRESH_SECRET),
        }
    }

    async generateTokens(payload: any) {
        const { atSecret, rtSecret } = this.getSecret();
    
        const accessToken = await this.jwt.signAsync(payload, {secret: atSecret, expiresIn: ETime.MINUTE * 30});
        const refreshToken = await this.jwt.signAsync(payload, {secret: rtSecret, expiresIn: ETime.DAY * 7});

        return {accessToken, refreshToken};
    } 

    async verifyAccessToken(token: string) {
        const { atSecret } = this.getSecret();

        return await this.jwt.verifyAsync(token, {secret: atSecret});
    }

    async verifyRefreshToken(token: string) {
        const { rtSecret } = this.getSecret();

        return await this.jwt.verifyAsync(token, {secret: rtSecret});
    }

}
