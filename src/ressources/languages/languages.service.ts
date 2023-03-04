import { PrismaService } from 'nestjs-prisma';
import { PrismaClient } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { CreateLanguageInput } from './dto/create-language.input';
import { UpdateLanguageInput } from './dto/update-language.input';

@Injectable()
export class LanguagesService {
  constructor(private prismaService: PrismaService) {}
  create(createLanguageInput: CreateLanguageInput) {
    return this.prismaService.languages.create({
      data: createLanguageInput,
    });
  }

  async findAll() {
    const languages = await this.prismaService.languages.findMany({
      include: {
        snippets: true,
      },
    });

    return languages.map((language) => {
      return {
        ...language,
        numberOfSnippets: language.snippets.length,
      };
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} language`;
  }

  update(id: number, updateLanguageInput: UpdateLanguageInput) {
    return `This action updates a #${id} language`;
  }

  remove(id: number) {
    return `This action removes a #${id} language`;
  }
}
