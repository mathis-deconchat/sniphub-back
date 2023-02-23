import { PrismaService } from 'nestjs-prisma';
import { Injectable } from '@nestjs/common';
import { CreateTagInput } from './dto/create-tag.input';
import { UpdateTagInput } from './dto/update-tag.input';

@Injectable()
export class TagsService {
  constructor(private prismaService: PrismaService) {}

  async create(createTagInput: CreateTagInput) {
    const tag = await this.prismaService.tags.findFirst({
      where: {
        name: createTagInput.name,
      },
      include: {
        snippets: true,
      },
    });
    if(tag) return {...tag, numberOfSnippets: tag.snippets.length};
    
    return await this.prismaService.tags.create({
      data: createTagInput,
    });
  }

  findAll() {
    return this.prismaService.tags.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} tag`;
  }

  update(id: number, updateTagInput: UpdateTagInput) {
    return `This action updates a #${id} tag`;
  }

  remove(id: number) {
    return this.prismaService.tags.delete({
      where: {
        id: id,
      },
    });
  }
}
