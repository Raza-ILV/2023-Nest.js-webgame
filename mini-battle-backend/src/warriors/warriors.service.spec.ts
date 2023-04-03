import { Test, TestingModule } from '@nestjs/testing';
import { WarriorsService } from './warriors.service';

describe('WarriorsService', () => {
  let service: WarriorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WarriorsService],
    }).compile();

    service = module.get<WarriorsService>(WarriorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
