import { Module } from '@nestjs/common';
import { TurmaService } from './turma.service';
import { TurmaController } from './turma.controller';
import { PrismaService } from 'src/prisma.service';
import { TurmaRepository } from './repository/turma.repository';
import { TurmaRepositoryPrisma } from './repository/prisma/turma.prisma';

@Module({
  controllers: [TurmaController],
  providers: [
    TurmaService, 
    PrismaService, 
    { 
      provide: TurmaRepository, 
      useClass: TurmaRepositoryPrisma 
    }
  ],
  exports: [TurmaService]
})
export class TurmaModule { }
