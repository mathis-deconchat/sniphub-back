import { PrismaModule } from 'nestjs-prisma';
import { Module } from '@nestjs/common';
import { LanguagesService } from './languages.service';
import { LanguagesResolver } from './languages.resolver';

@Module({
  providers: [LanguagesResolver, LanguagesService],
  imports: [PrismaModule],
})
export class LanguagesModule {}
