import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserRepositoryModule } from 'src/services/repositories/user-repository/user-repository.module';
import { JwtModule } from 'src/services/jwt/jwt.module';
import RefreshJwtGuard from 'src/common/guards/refresh-jwt.guard';
import AccessJwtGuard from 'src/common/guards/access-jwt.guard';

@Module({
  imports: [
    UserRepositoryModule,
    JwtModule,
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    RefreshJwtGuard,
    AccessJwtGuard,
  ],
  exports: [
    JwtModule,
    RefreshJwtGuard,
    AccessJwtGuard,
  ],
})
export class AuthModule {}
