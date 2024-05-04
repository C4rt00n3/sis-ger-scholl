import { Module } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoController } from './aluno.controller';
import { DocumentosModule } from 'src/documentos/documentos.module';
import { AlunoTransferenciaModule } from 'src/aluno_transferencia/aluno_transferencia.module';
import { PrismaService } from 'src/prisma.service';
import { AlunoRepository } from './repositori/aluno.repository';
import { EnderecoModule } from 'src/endereco/endereco.module';
import { ConvenioModule } from 'src/convenio/convenio.module';
import { AlunoRepositoryPrisma } from './repositori/prisma/aluno.prisma';
import { SerieModule } from 'src/serie/serie.module';
import { TurmaModule } from 'src/turma/turma.module';
import { FiliacaoAlunoModule } from 'src/filiacao-aluno/filiacao-aluno.module';

@Module({
  imports: [
    DocumentosModule,
    AlunoTransferenciaModule, 
    EnderecoModule,
    ConvenioModule,
    SerieModule,
    TurmaModule,
    FiliacaoAlunoModule
  ],
  controllers: [
    AlunoController
  ],
  providers: [
    AlunoService, 
    PrismaService,
    {
      provide: AlunoRepository,
      useClass: AlunoRepositoryPrisma  
    }
  ],
  exports: [AlunoService]
})
export class AlunoModule {}
