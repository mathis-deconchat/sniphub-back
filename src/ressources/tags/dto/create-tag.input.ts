import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTagInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => Int, { description: 'Example field (placeholder)', nullable: true })
  snippetId?: number;
}
