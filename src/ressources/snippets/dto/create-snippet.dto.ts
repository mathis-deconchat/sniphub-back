import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@InputType()
export class CreateSnippetInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  code_content: string;

  @Field(() => Int)
  languageId: number;

  @Field(() => String)
  description: string;

  @Field(() => [Int])
  tags: number[];

  @Field(() => String, { nullable: true })
  prefix_vscode?: string;
}
