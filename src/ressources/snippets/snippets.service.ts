import { CreateSnippetNestInput } from './dto/create-snippet.nest.dto';
import { CreateSnippetInput } from './dto/create-snippet.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SnippetsService {
  constructor(private prismaService: PrismaService) {}

  async createSnippet(createSnippetInput: CreateSnippetInput) {
    return await this.prismaService.snippets.create({
      data: {
        title: createSnippetInput.title,
        code_content: createSnippetInput.code_content,
        description: createSnippetInput.description,
        prefix_vscode: createSnippetInput.prefix_vscode ?? '',
        language: {
          connect: {
            id: createSnippetInput.languageId
          }
        },
        tags: {
          connect: createSnippetInput.tags.map(tag => ({ id: tag }))
        },
      }
    });

  }

  async findAllSnippets(){
    let snippets = await this.prismaService.snippets.findMany({
      include: {
        language: true,
        tags: true,
      }

    });
    return snippets;
  }


  async findAllSnippetsByLanguage(languageId: number){
    let snippets = await this.prismaService.snippets.findMany({
      where: {
        languageId: languageId
      },
      include: {
        language: true,
        tags: true,
      }

    });
    return snippets;
  }

  async getSnippetById(id: number){
    let snippet = await this.prismaService.snippets.findUnique({
      where: {
        id: id
      },
      include: {
        language: true,
        tags: true,
      }

    });
    return snippet;
  }
}
