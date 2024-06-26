import { Module } from '@nestjs/common';
import { EscolaService } from './escola.service';
import { EscolaController } from './escola.controller';
import { PrismaService } from 'src/prisma.service';
import { EscolaRepository } from './repository/escola.repository';
import { EscolaRepositoryPrisma } from './repository/prisma/escola.prisma';
import { EnderecoModule } from 'src/endereco/endereco.module';

@Module({
  imports: [ EnderecoModule ],
  controllers: [EscolaController],
  providers: [
    EscolaService, 
    PrismaService, 
    {
      provide: EscolaRepository, 
      useClass: EscolaRepositoryPrisma
    }
  ],
  exports: [ EscolaService ]
})
export class EscolaModule {}
