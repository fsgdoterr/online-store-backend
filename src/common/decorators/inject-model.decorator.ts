import { Inject } from "@nestjs/common";
import { ModelCtor } from "sequelize-typescript";

export default function InjectModel(model: ModelCtor): ParameterDecorator {
    return function(target: any, propertyKey: string | symbol, parameterIndex: number) {
        const providerName = `${model.name}_DB_MODEL`;
        Inject(providerName)(target, propertyKey, parameterIndex);
    }
}