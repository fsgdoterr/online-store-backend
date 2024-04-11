import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "src/services/jwt/jwt.service";


@Injectable()
export default class AccessJwtGuard implements CanActivate {

    constructor(
        private readonly jwt: JwtService,
    ) {}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        try {
            const request = context.switchToHttp().getRequest();
            const token = request.headers.authorization.split(' ')[1]

            const userData = await this.jwt.verifyAccessToken(token);
            if(!token)
                throw new UnauthorizedException('Unauthorized');

            request.user = userData;

            return true;
        } catch(e) {
            throw new UnauthorizedException('Unauthorized');
        }
    }

}