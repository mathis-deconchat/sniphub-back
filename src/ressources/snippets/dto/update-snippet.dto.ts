import {
  Field,
  InputType,
  Int,
  ObjectType,
  PartialType,
} from '@nestjs/graphql';
import { CreateSnippetInput } from './create-snippet.dto';

@InputType()
export class UpdateSnippetDto extends PartialType(CreateSnippetInput) {

}
