import { SnippetsCategoriesModel } from './../../snippets_categories/models/snippets_categories.model';
import { UserModel } from './../../users/models/user.model';
import { BaseModel } from './../../../common/models/base.model';
import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SnippetsModel extends BaseModel {
    @Field(() => String)
    title: string;

    @Field(() => String)
    code_content: string;

    @Field(() => String)
    language: string;

    // @Field(() => UserModel)
    // user: UserModel

    // @Field((_type) => Int)
    // userId: number

    // @Field((_type) => SnippetsCategoriesModel)
    // categories: SnippetsCategoriesModel

    // @Field((_type) => Int)
    // categoriesId: number


}