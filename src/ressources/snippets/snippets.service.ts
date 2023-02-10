import { CreateSnippetInput } from './dto/create-snippet.dto';
import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SnippetsService {
  constructor(private prismaService: PrismaService) {}

  async createSnippet(createSnippetInput: CreateSnippetInput) {
    let snippet = await this.prismaService.snippets.create({
      data: createSnippetInput,
    });
    return snippet;
  }

  async findAllSnippets(){
    let snippets = await this.prismaService.snippets.findMany({
        // include: {
        //  categories: true,
        //  user: true,
        // }
    });
    return snippets;
  }
}
