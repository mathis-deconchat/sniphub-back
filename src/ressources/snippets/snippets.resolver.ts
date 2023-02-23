import { CreateSnippetInput } from './dto/create-snippet.dto';
import { SnippetsModel } from './models/snippets.model';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { SnippetsService } from './snippets.service';

@Resolver()
export class SnippetsResolver {
  constructor(private readonly snippetsService: SnippetsService) {}

  // Create one snippet
  @Mutation(() => SnippetsModel, { name: 'createSnippet' })
  async createSnippet(
    @Args('createSnippetInput') createSnippetInput: CreateSnippetInput,
  ) {
    return await this.snippetsService.createSnippet(createSnippetInput);
  }

  @Query(() => [SnippetsModel], { name: 'snippets' })
  findAllSnippets() {
    return this.snippetsService.findAllSnippets();
  }

  @Query(() => [SnippetsModel], { name: 'snippetsByLanguage' })
  findAllSnippetsByLanguage(@Args('languageId') languageId: number) {
    return this.snippetsService.findAllSnippetsByLanguage(languageId);
  }

  @Query(() => SnippetsModel, { name: 'snippet' })
  getSnippetById(@Args('snippetId') snippetId: number) {
    return this.snippetsService.getSnippetById(snippetId);
  }
}
