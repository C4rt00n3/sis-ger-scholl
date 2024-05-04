import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { PrismaService } from '@SRC/prisma.service';

@Module({
  imports: [UsersModule, JwtModule.register({
    global: true,
    secret: process.env.SECRET_KEY,
    signOptions: { expiresIn: '7d' },
  }), UsersModule],
  providers: [AuthService],
  controllers: [AuthController,],
})
export class AuthModule { }