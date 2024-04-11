import { ExecutionContext, createParamDecorator } from "@nestjs/common";


export const LimitOffset = createParamDecorator(
    ([defaultLimit, defaultOffset]: [number, number], ctx: ExecutionContext) => {
        
        const request = ctx.switchToHttp().getRequest();
        const { _limit, _offset } = request.headers;
        const limit = isNaN(+_limit) ? defaultLimit : +_limit;
        const offset = isNaN(+_offset) ? defaultOffset : +_offset;

        return {limit, offset};
    }
);