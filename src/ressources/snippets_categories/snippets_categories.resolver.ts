import { SnippetsCategoriesModel } from './models/snippets_categories.model';
import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SnippetsCategoriesService } from './snippets_categories.service';

@Resolver(() => SnippetsCategoriesModel)
export class SnippetsCategoriesResolver {
  constructor(
    private readonly snippetsCategoriesService: SnippetsCategoriesService,
  ) {}

  // @Mutation(() => SnippetsCategory)
  // createSnippetsCategory(@Args('createSnippetsCategoryInput') createSnippetsCategoryInput: CreateSnippetsCategoryInput) {
  //   return this.snippetsCategoriesService.create(createSnippetsCategoryInput);
  // }

  // @Query(() => [SnippetsCategory], { name: 'snippetsCategories' })
  // findAll() {
  //   return this.snippetsCategoriesService.findAll();
  // }

  // @Query(() => SnippetsCategory, { name: 'snippetsCategory' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.snippetsCategoriesService.findOne(id);
  // }

  // @Mutation(() => SnippetsCategory)
  // updateSnippetsCategory(@Args('updateSnippetsCategoryInput') updateSnippetsCategoryInput: UpdateSnippetsCategoryInput) {
  //   return this.snippetsCategoriesService.update(updateSnippetsCategoryInput.id, updateSnippetsCategoryInput);
  // }

  // @Mutation(() => SnippetsCategory)
  // removeSnippetsCategory(@Args('id', { type: () => Int }) id: number) {
  //   return this.snippetsCategoriesService.remove(id);
  // }
}
