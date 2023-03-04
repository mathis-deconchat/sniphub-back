import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LanguagesService } from './languages.service';
import { Language } from './models/language.model';
import { CreateLanguageInput } from './dto/create-language.input';
import { UpdateLanguageInput } from './dto/update-language.input';

@Resolver(() => Language)
export class LanguagesResolver {
  constructor(private readonly languagesService: LanguagesService) {}

  @Query(() => [Language], { name: 'languages' })
  findAll() {
    return this.languagesService.findAll();
  }

  @Mutation(() => Language)
  createLanguage(
    @Args('createLanguageInput') createLanguageInput: CreateLanguageInput,
  ) {
    return this.languagesService.create(createLanguageInput);
  }
}
