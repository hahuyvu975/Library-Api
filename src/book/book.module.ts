import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BookController } from './book.controller';
import { BookService } from './book.service';
import { Book, BookSchema } from './schemas/book.schemas';

@Module({
  imports: [MongooseModule.forFeature([{
    name: Book.name, 
    schema: BookSchema
  }])],
  controllers: [BookController],
  providers: [BookService]
})
export class BookModule {}
