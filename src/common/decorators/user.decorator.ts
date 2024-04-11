import { createParamDecorator } from "@nestjs/common";
import { ExecutionContext } from "@nestjs/common/interfaces";

export const User = createParamDecorator(
    (data: string, ctx: ExecutionContext) => {
        const { user } = ctx.switchToHttp().getRequest();
        
        if(data) return user[data];

        return user;
    }
);