import { Module } from '@nestjs/common';
import { SnippetsService } from './snippets.service';
import { SnippetsResolver } from './snippets.resolver';

@Module({
  providers: [SnippetsResolver, SnippetsService],
})
export class SnippetsModule {}
