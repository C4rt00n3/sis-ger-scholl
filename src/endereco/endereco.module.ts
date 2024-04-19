import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { PrismaService } from 'src/prisma.service';
import { EnderecoRepository } from './repository/endereco.repository';
import { EnderecoRepositoryPrisma } from './repository/prisma/endereco.prisma';

@Module({
  controllers: [EnderecoController],
  providers: [
    EnderecoService, 
    PrismaService, 
    {
      provide: EnderecoRepository,
      useClass: EnderecoRepositoryPrisma
    }
  ],
  exports: [EnderecoService]
})
export class EnderecoModule { }
