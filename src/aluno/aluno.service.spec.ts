import { Test, TestingModule } from '@nestjs/testing';
import { AlunoService } from './aluno.service';
import { PrismaService } from 'src/prisma.service';
import { AlunoRepository } from './repositori/aluno.repository';
import { AlunoRepositoryPrisma } from './repositori/prisma/aluno.prisma';

describe('AlunoService', () => {
  let service: AlunoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlunoService, PrismaService, {provide: AlunoRepository, useClass: AlunoRepositoryPrisma}],
    }).compile();

    service = module.get<AlunoService>(AlunoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
