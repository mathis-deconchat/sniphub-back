import { ConfigModule, ConfigService } from '@nestjs/config';
import { GqlConfigService } from './gql-config.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from 'nestjs-prisma';
import { SnippetsModule } from './ressources/snippets/snippets.module';
import { UsersModule } from './ressources/users/users.module';
import { SnippetsCategoriesModule } from './ressources/snippets_categories/snippets_categories.module';
import config from './common/config/config';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,      
    }),
    ConfigModule.forRoot({ isGlobal: true, load: [config], envFilePath: '.env' }),

    PrismaModule.forRoot({
      isGlobal: true,
      prismaServiceOptions: {
        //middlewares: [loggingMiddleware(new Logger('PrismaMiddleware'))], // Implements logging middleware
      },
    }),
    SnippetsModule,
    UsersModule,
    SnippetsCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
