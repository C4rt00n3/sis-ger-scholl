import { Module } from '@nestjs/common';
import { FiliacaoAlunoService } from './filiacao-aluno.service';
import { FiliacaoAlunoController } from './filiacao-aluno.controller';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { FiliacaoAlunoRepository } from './repository/filiacao-aluno.repository';
import { FiliacaoAlunoRepositoryPrisma } from './repository/prisma/filiacao-aluno.prisma';

@Module({
  controllers: [FiliacaoAlunoController],
  providers: [
    FiliacaoAlunoService, 
    PrismaService, {
      provide: FiliacaoAlunoRepository, 
      useClass: FiliacaoAlunoRepositoryPrisma
    }
  ],
  exports: [FiliacaoAlunoService]
})
export class FiliacaoAlunoModule {}
