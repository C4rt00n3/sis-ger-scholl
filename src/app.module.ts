import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MatriculaModule } from './matricula/matricula.module';
import { AlunoModule } from './aluno/aluno.module';
import { DocumentosModule } from './documentos/documentos.module';
import { EnderecoModule } from './endereco/endereco.module';
import { AlunoTransferenciaModule } from './aluno_transferencia/aluno_transferencia.module';
import { ConvenioModule } from './convenio/convenio.module';
import { EscolaModule } from './escola/escola.module';
import { SerieModule } from './serie/serie.module';
import { TurmaModule } from './turma/turma.module';
import { FiliacaoAlunoModule } from './filiacao-aluno/filiacao-aluno.module';

@Module({
  imports: [
    UsersModule,
    MatriculaModule,
    AlunoModule,
    DocumentosModule,
    EnderecoModule,
    AlunoTransferenciaModule,
    ConvenioModule,
    EscolaModule,
    SerieModule,
    TurmaModule,
    FiliacaoAlunoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
