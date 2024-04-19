import { Module } from '@nestjs/common';
import { ConvenioService } from './convenio.service';
import { PrismaService } from 'src/prisma.service';
import { ConvenioRepository } from './repository/convenio.repository';
import { ConvenioController } from './convenio.controller';
import { ConvenioRepositoryPrisma } from './repository/prisma/convenio.prisma';

@Module({
  controllers: [ConvenioController],
  providers: [ConvenioService, PrismaService, {
    provide: ConvenioRepository,
    useClass: ConvenioRepositoryPrisma
  },
  ],
  exports: [ConvenioService]
})
export class ConvenioModule { }
