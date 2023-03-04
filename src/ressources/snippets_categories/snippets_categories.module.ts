import { Module } from '@nestjs/common';
import { SnippetsCategoriesService } from './snippets_categories.service';
import { SnippetsCategoriesResolver } from './snippets_categories.resolver';

@Module({
  providers: [SnippetsCategoriesResolver, SnippetsCategoriesService],
})
export class SnippetsCategoriesModule {}
