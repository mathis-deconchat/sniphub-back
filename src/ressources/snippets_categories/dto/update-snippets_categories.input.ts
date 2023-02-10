import { CreateSnippetsCategoriesInput } from './create-snippets_categories.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSnippetsCategoriesInput extends PartialType(CreateSnippetsCategoriesInput) {
  @Field(() => Int)
  id: number;
}
