import { Test, TestingModule } from '@nestjs/testing';
import { SnippetsCategoriesService } from './snippets_categories.service';

describe('SnippetsCategoriesService', () => {
  let service: SnippetsCategoriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SnippetsCategoriesService],
    }).compile();

    service = module.get<SnippetsCategoriesService>(SnippetsCategoriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
