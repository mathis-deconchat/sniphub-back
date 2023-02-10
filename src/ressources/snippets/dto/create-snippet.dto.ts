import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@InputType()
export class CreateSnippetInput {
    @Field(() => String)
    title: string;

    @Field(() => String)
    code_content: string;

    @Field(() => String)
    language: string;

    // @Field(() => Int)
    // userId: number;

    // @Field(() => Int)
    // categoriesId: number;

}