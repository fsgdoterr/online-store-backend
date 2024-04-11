import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepositoryModule } from 'src/services/repositories/user-repository/user-repository.module';
import { JwtModule } from 'src/services/jwt/jwt.module';

@Module({
  imports: [
    UserRepositoryModule,
    JwtModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [
    JwtModule
  ],
})
export class AuthModule {}
