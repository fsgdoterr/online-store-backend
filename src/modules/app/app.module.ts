import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from 'src/common/config/config';

@Module({
    imports: [
        ConfigModule.forRoot(configOptions)
    ],
})
export class AppModule {}
