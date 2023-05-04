import { Test, TestingModule } from '@nestjs/testing';
import { ServiceNameService } from './service-name.service';

describe('ServiceNameService', () => {
  let service: ServiceNameService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceNameService],
    }).compile();

    service = module.get<ServiceNameService>(ServiceNameService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
