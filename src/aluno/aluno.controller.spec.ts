import { Test, TestingModule } from '@nestjs/testing';
import { AlunoController } from './aluno.controller';
import { AlunoService } from './aluno.service';
import { PrismaService } from 'src/prisma.service';
import { AlunoRepository } from './repositori/aluno.repository';
import { AlunoRepositoryPrisma } from './repositori/prisma/aluno.prisma';

describe('AlunoController', () => {
  let controller: AlunoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlunoController],
      providers: [AlunoService, PrismaService, {provide: AlunoRepository, useClass: AlunoRepositoryPrisma}],
    }).compile();

    controller = module.get<AlunoController>(AlunoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
