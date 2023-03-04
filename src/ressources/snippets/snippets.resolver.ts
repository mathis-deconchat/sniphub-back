import { UpdateSnippetDto } from './dto/update-snippet.dto';
import { CreateSnippetInput } from './dto/create-snippet.dto';
import { SnippetsModel } from './models/snippets.model';
import { Args, Mutation, Resolver, Query, Int } from '@nestjs/graphql';
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

  @Mutation(() => SnippetsModel, { name: 'updateSnippet' })
  async updateSnippet(
    @Args('updateSnippetInput') updateSnippetInput: UpdateSnippetDto,
    @Args('snippetId') snippetId: number,
  ) {
    return await this.snippetsService.updateSnippet(updateSnippetInput, snippetId);
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

  @Query(() => [SnippetsModel], { name: 'searchSnippets' })
  searchSnippets(
    @Args('search') search: string,
    @Args('languageId') languageId: number,
  ) {
    return this.snippetsService.searchSnippets(search, languageId);
  }

  @Mutation(() => SnippetsModel,{name:"removeSnippet"})
  removeSnippet(@Args('id', { type: () => Int}) id: number) {
    return this.snippetsService.remove(id);
  }
}
