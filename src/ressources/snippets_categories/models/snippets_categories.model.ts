import { SnippetsModel } from '../../snippets/models/snippets.model';
import { BaseModel } from '../../../common/models/base.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SnippetsCategoriesModel extends BaseModel {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  name: number;

  @Field(() => [SnippetsModel])
  snippets: SnippetsModel[];

  @Field(() => Int)
  snippetId: number;
}
