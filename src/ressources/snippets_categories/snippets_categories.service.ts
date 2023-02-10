import { PrismaService } from 'nestjs-prisma';
import { UpdateSnippetsCategoriesInput } from './dto/update-snippets_categories.input';
import { CreateSnippetsCategoriesInput } from './dto/create-snippets_categories.input';
import { Injectable } from '@nestjs/common';
@Injectable()
export class SnippetsCategoriesService {
  constructor(private prismaService: PrismaService) {}

  async createSnippetCategory(createSnippetsCategoriesInput: CreateSnippetsCategoriesInput) {
    let snippetCategory = await this.prismaService.snippets_categories.create({
      data: createSnippetsCategoriesInput,
    });
    return snippetCategory;
  }

  findAllSnippetsCategories() {
    return this.prismaService.snippets_categories.findMany({
      include: {
        snippets: true,
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} snippetsCategory`;
  }

  update(id: number, updateSnippetsCategoryInput: UpdateSnippetsCategoriesInput) {
    return `This action updates a #${id} snippetsCategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} snippetsCategory`;
  }
}
