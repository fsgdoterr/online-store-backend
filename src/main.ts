import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { EEnvVariables } from './common/constants/env-variables';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const port = configService.get(EEnvVariables.PORT);

  app.setGlobalPrefix('api');

  app.use(cookieParser());
  await app.listen(port);
}
bootstrap();
