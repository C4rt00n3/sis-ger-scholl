import { Module } from '@nestjs/common';
import { DocumentosService } from './documentos.service';
import { DocumentosController } from './documentos.controller';
import { PrismaService } from 'src/prisma.service';
import { DocumentosRepository } from './repository/documentos.repository';
import { DocumentosRepositoryPrisma } from './repository/prisma/documentos.prisma';

@Module({
  controllers: [DocumentosController],
  providers: [DocumentosService, PrismaService, {
    provide: DocumentosRepository,
    useClass: DocumentosRepositoryPrisma
  }],
  exports: [DocumentosService]
})
export class DocumentosModule {}
