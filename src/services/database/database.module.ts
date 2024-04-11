import { DynamicModule, Module, Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SyncOptions } from 'sequelize';
import { ModelCtor, Sequelize } from 'sequelize-typescript';
import { EEnvVariables } from 'src/common/constants/env-variables';

@Module({})
export class DatabaseModule {

    static forRoot(models: ModelCtor[], syncOptions?: SyncOptions): DynamicModule {
        const provider: Provider = {
            provide: "SEQUELIZE",
            inject: [ConfigService],
            useFactory: async(configService: ConfigService) => {
                const sequelize = new Sequelize({
                    dialect: 'postgres',
                    host: configService.get(EEnvVariables.DB_HOST),
                    port: +configService.get(EEnvVariables.DB_PORT),
                    username: configService.get(EEnvVariables.DB_USER),
                    password: configService.get(EEnvVariables.DB_PASS),
                    database: configService.get(EEnvVariables.DB_NAME)
                });
                sequelize.addModels(models);
                await sequelize.sync(syncOptions);

                return sequelize;
            }
        }

        return {
            module: DatabaseModule,
            providers:[provider],
            exports:[provider],
        }
    }

    static forFeature(models: ModelCtor[]): DynamicModule {
        const providers: Provider[] = models.map(m => ({
            provide: `${m.name}_DB_MODEL`,
            useValue: m,
        }));

        return {
            module: DatabaseModule,
            providers: [...providers],
            exports: [...providers],
        }
    }

}
