import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configOptions } from 'src/common/config/config';
import { DatabaseModule } from 'src/services/database/database.module';

@Module({
    imports: [
        ConfigModule.forRoot(configOptions),
        DatabaseModule.forRoot([]),
    ],
})
export class AppModule {}
