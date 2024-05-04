import { Test, TestingModule } from '@nestjs/testing';
import { AlunoTransferenciaService } from './aluno_transferencia.service';

describe('AlunoTransferenciaService', () => {
  let service: AlunoTransferenciaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AlunoTransferenciaService],
    }).compile();

    service = module.get<AlunoTransferenciaService>(AlunoTransferenciaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
