import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaClient } from '@prisma/client/edge'
import { UsersRepository } from './repository/users.repository';
import { UsersPrismaRepository } from './repository/prisma/users.prisma';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService, {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    }],

})
export class UsersModule { }
