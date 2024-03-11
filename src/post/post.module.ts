import { Module } from '@nestjs/common';
import { ObjectionModule } from '@willsoto/nestjs-objection';
import PostRepository from '../repositories/PostRepository';
import { PostController } from './post.controller';
import Post from './post.model';

@Module({
  imports: [ObjectionModule.forFeature([Post])],
  controllers: [PostController],
  providers: [{ provide: 'PostRepository', useClass: PostRepository }],
})
export class PostModule {}
