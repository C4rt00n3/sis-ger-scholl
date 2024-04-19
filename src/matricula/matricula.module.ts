import { Module } from '@nestjs/common';
import { MatriculaService } from './matricula.service';
import { MatriculaController } from './matricula.controller';
import { PrismaService } from 'src/prisma.service';
import { MatriculaRepository } from './repository/matricula.repository';
import { MatriculaPrismaRepository } from './repository/prisma/matricula.prisma';
import { AlunoModule } from 'src/aluno/aluno.module';

@Module({
  imports: [AlunoModule],
  controllers: [MatriculaController],
  providers: [MatriculaService, PrismaService, {
    provide: MatriculaRepository,
    useClass: MatriculaPrismaRepository
  }],
})
export class MatriculaModule {}
