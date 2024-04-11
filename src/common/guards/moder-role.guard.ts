import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { ERole } from "../constants/role";


@Injectable()
export default class ModerRoleGuard implements CanActivate {

    canActivate(context: ExecutionContext): boolean {
        try {
            const { user } = context.switchToHttp().getRequest();
            if(user.role < ERole.MODER)
                throw new ForbiddenException('Don\'t have permissions');

            return true;
        } catch(e) {
            throw new ForbiddenException('Don\'t have permissions');
        }
    }

}