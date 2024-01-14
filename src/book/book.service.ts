import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schemas';
import * as mongoose from 'mongoose';

@Injectable()
export class BookService {
    constructor(
        @InjectModel(Book.name)
        private bookModel: mongoose.Model<Book>
    ) { }

    async findAll(): Promise<Book[]> {
        const books = await this.bookModel.find();
        return books;
    }

    async create(book: Book): Promise<Book> {
        const newBook = await this.bookModel.create(book);
        return newBook;
    }

    async findById(id: string): Promise<Book> {
        try {
            const book = await this.bookModel.findById(id);
            return book;
        } catch (error) {
            throw new NotFoundException('Book not found!')
        }
    }

    async updateById(id: string, book: Book): Promise<Book> {
        return await this.bookModel.findByIdAndUpdate(
            id,
            book,
            {
                new: true,
                runValidators: true,
            }
        );
    }
    
    async deleteById(id: string) {
        try {
            return await this.bookModel.findByIdAndDelete({ _id: id });
        } catch (error) {
            throw new NotFoundException('Not found book')
        }  
    }
}
