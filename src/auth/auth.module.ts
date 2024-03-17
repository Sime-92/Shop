import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller'; // Importa el AuthController aquí

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET_KEY,
      signOptions: { expiresIn: '60s' },
    }),
    PassportModule,
  ],
  controllers: [AuthController], // Añade el AuthController a la lista de controladores
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
