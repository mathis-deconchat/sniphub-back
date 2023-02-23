import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateSnippetInput } from './create-snippet.dto';

@InputType()
export class CreateSnippetNestInput extends CreateSnippetInput {
  @Field(() => Int)
  userId: number;
}
