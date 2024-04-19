import { Test, TestingModule } from '@nestjs/testing';
import { ConvenioService } from './convenio.service';
import { ConvenioController } from './convenio.controller';

describe('CovenioController', () => {
  let controller: ConvenioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConvenioController],
      providers: [ConvenioService],
    }).compile();

    controller = module.get<ConvenioController>(ConvenioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
