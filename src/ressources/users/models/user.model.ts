import { SnippetsModel } from './../../snippets/models/snippets.model';
import { BaseModel } from './../../../common/models/base.model';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserModel extends BaseModel {
  @Field(() => String, { description: 'Example field (placeholder)' })
  email: string;

  @Field(() => String, { description: 'Example field (placeholder)' })
  s3Sub: string;

  @Field(() => [SnippetsModel], { description: 'Example field (placeholder)' })
  snippets: SnippetsModel[];

}
