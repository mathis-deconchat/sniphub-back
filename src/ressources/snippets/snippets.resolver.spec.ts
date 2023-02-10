import { Test, TestingModule } from '@nestjs/testing';
import { SnippetsResolver } from './snippets.resolver';
import { SnippetsService } from './snippets.service';

describe('SnippetsResolver', () => {
  let resolver: SnippetsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnippetsResolver, SnippetsService],
    }).compile();

    resolver = module.get<SnippetsResolver>(SnippetsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
