import { Test, TestingModule } from '@nestjs/testing';
import { WarriorsController } from './mini-warriors.controller';

describe('WarriorsController', () => {
  let controller: WarriorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WarriorsController],
    }).compile();

    controller = module.get<WarriorsController>(WarriorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
