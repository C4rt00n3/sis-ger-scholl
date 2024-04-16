import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MatriculaModule } from './matricula/matricula.module';
import { AlunoModule } from './aluno/aluno.module';
import { DocumentosModule } from './documentos/documentos.module';

@Module({
  imports: [UsersModule, MatriculaModule, AlunoModule, DocumentosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
