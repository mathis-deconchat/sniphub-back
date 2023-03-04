import { BaseModel } from './../../../common/models/base.model';
import { SnippetsModel } from './../../snippets/models/snippets.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Language extends BaseModel {
  @Field(() => String, { description: 'Language name' })
  name: string;

  @Field(() => String, { description: 'Reference icon for front' })
  iconName: string;

  @Field(() => SnippetsModel, {
    description: 'Language description',
    nullable: true,
  })
  snippets?: SnippetsModel[];

  @Field(() => Int, { description: 'Language id' })
  numberOfSnippets: number;

  @Field(() => String, { description: 'Language description', nullable: true })
  prismLanguage: string;
}
