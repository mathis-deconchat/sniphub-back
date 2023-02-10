import { Test, TestingModule } from '@nestjs/testing';
import { SnippetsCategoriesResolver } from './snippets_categories.resolver';
import { SnippetsCategoriesService } from './snippets_categories.service';

describe('SnippetsCategoriesResolver', () => {
  let resolver: SnippetsCategoriesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnippetsCategoriesResolver, SnippetsCategoriesService],
    }).compile();

    resolver = module.get<SnippetsCategoriesResolver>(SnippetsCategoriesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
