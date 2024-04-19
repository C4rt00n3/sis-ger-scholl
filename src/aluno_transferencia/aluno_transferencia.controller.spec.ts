import { Test, TestingModule } from '@nestjs/testing';
import { AlunoTransferenciaController } from './aluno_transferencia.controller';
import { AlunoTransferenciaService } from './aluno_transferencia.service';

describe('AlunoTransferenciaController', () => {
  let controller: AlunoTransferenciaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AlunoTransferenciaController],
      providers: [AlunoTransferenciaService],
    }).compile();

    controller = module.get<AlunoTransferenciaController>(AlunoTransferenciaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
