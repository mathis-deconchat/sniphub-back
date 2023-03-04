import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSnippetsCategoriesInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;
}
