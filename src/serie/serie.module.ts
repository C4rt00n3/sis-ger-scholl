import { Module } from '@nestjs/common';
import { SerieService } from './serie.service';
import { SerieController } from './serie.controller';
import { PrismaService } from 'src/prisma.service';
import { SerieRepository } from './repository/turma.repository';
import { SerieRepositoryPrisma } from './repository/prisma/turma.prisma';

@Module({
  controllers: [SerieController],
  providers: [
    SerieService, 
    PrismaService,
    {
      provide: SerieRepository,
      useClass: SerieRepositoryPrisma
    }
  ],
  exports: [SerieService]
})
export class SerieModule {}
