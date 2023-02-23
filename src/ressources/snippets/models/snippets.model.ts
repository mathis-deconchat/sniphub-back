import { Language } from './../../languages/models/language.model';
import { SnippetsCategoriesModel } from './../../snippets_categories/models/snippets_categories.model';
import { BaseModel } from './../../../common/models/base.model';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Tag } from 'src/ressources/tags/models/tag.models';

@ObjectType()
export class SnippetsModel extends BaseModel {
  @Field(() => String)
  title: string;

  @Field(() => String)
  code_content: string;

  @Field(() => Int)
  languageId: number;

  @Field(() => String)
  description: string;

  @Field(() => String)
  prefix_vscode: string;

  @Field(() => [Tag], { nullable: true })
  tags?: Tag[];

  @Field(() => Language, { nullable: true })
  language?: Language;
}
