import { BaseModel } from './../../../common/models/base.model';
import { SnippetsModel } from './../../snippets/models/snippets.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Tag extends BaseModel{
  @Field(() => String, { description: 'Example field (placeholder)' })
  name: string;

  @Field(() => [SnippetsModel], { description: 'Example field (placeholder)', nullable: true })
  snippets?: SnippetsModel[];

  @Field(() => Int, { description: 'Example field (placeholder)', nullable: true })
  numberOfSnippets?: number;
}
