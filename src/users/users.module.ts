import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepository } from './repository/users.repository';
import { UsersPrismaRepository } from './repository/prisma/users.prisma';
import { PrismaService } from 'src/prisma.service';
import { EscolaModule } from 'src/escola/escola.module';

@Module({
  imports: [EscolaModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    PrismaService, 
    {
      provide: UsersRepository,
      useClass: UsersPrismaRepository,
    }],
    exports: [ UsersService ]
})
export class UsersModule { }
