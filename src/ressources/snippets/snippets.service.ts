import { UpdateLanguageInput } from './../languages/dto/update-language.input';
import { Language } from './../languages/models/language.model';
import { CreateSnippetNestInput } from './dto/create-snippet.nest.dto';
import { CreateSnippetInput } from './dto/create-snippet.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { UpdateSnippetDto } from './dto/update-snippet.dto';

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
            id: createSnippetInput.languageId,
          },
        },
        tags: {
          connect: createSnippetInput.tags.map((tag) => ({ id: tag })),
        },
      },
    });
  }

  async searchSnippets(search: string, languageId: number) {
    let snippets = await this.prismaService.snippets.findMany({
      where: {
        OR: [
          {
            title: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            description: {
              contains: search,
              mode: 'insensitive',
            },
          },
          {
            code_content: {
              contains: search,
              mode: 'insensitive',
            },
          },
        ],
        languageId: languageId,
      },
      include: {
        language: true,
        tags: true,
      },
    });
    return snippets;
  }

  async updateSnippet(update: UpdateSnippetDto, snippetId: number){
    console.log(update)
    let t = {}
    if(!(update.tags)) {
      t = undefined;
    } else {
       t = {
        tags: {
          connect: update.tags.map((tag) => ({ id: tag })) || undefined,
        }
      }
    }

    if(!(update.languageId)) {
      t = {
        ...t,
        language: undefined
      }
    } else {
      t = {
        ...t,
        language: {
          connect: {
            id: update.languageId || undefined,
          },
        }
      }
    }

    return await this.prismaService.snippets.update({
      where: {
        id: snippetId
      },
      data: {
        title: update.title || undefined,
        code_content: update.code_content || undefined,
        description: update.description || undefined,
        prefix_vscode: update.prefix_vscode || undefined,
        language: {
          connect: {
            id: update.languageId || undefined,
          },
        },
        ...t

        },
    })
  }


  // async updateSnippet(updateSnippetDto: UpdateSnippetDto) {
  //   const { ...updateSnippetDto, id } = updateSnippetDto;
  //   return await this.prismaService.snippets.create({
  //     data: { updateSnippetDto },
  //   });
  // }

  async findAllSnippets() {
    let snippets = await this.prismaService.snippets.findMany({
      include: {
        language: true,
        tags: true,
      },
    });
    return snippets;
  }

  async findAllSnippetsByLanguage(languageId: number) {
    let snippets = await this.prismaService.snippets.findMany({
      where: {
        languageId: languageId,
      },
      include: {
        language: true,
        tags: true,
      },
    });
    return snippets;
  }

  async getSnippetById(id: number) {
    let snippet = await this.prismaService.snippets.findUnique({
      where: {
        id: id,
      },
      include: {
        language: true,
        tags: true,
      },
    });
    return snippet;
  }
}
