import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLanguageInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  iconName: string;

  @Field(() => String, {
    description: 'Example field (placeholder)',
    nullable: true,
  })
  prismLanguage: string;
}
