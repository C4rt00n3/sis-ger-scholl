import { Module } from '@nestjs/common';
import { AlunoTransferenciaService } from './aluno_transferencia.service';
import { AlunoTransferenciaController } from './aluno_transferencia.controller';
import { PrismaService } from 'src/prisma.service';
import { AlunoTransferenciaRepository } from './repository/aluno_transferencia';
import { AlunoTransferenciaRepositoryPrisma } from './repository/prisma/aluno_transferencia';

@Module({
  controllers: [AlunoTransferenciaController],
  providers: [
    AlunoTransferenciaService, 
    PrismaService, 
    {
    provide: AlunoTransferenciaRepository, 
    useClass: AlunoTransferenciaRepositoryPrisma
  }
  ],
  exports: [AlunoTransferenciaService]
})
export class AlunoTransferenciaModule {}
