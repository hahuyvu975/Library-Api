import { UpdateBookDTO } from './dto/update-book.dto';
import { CreateBookDTO } from './dto/create-book.dto';
import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { Book } from './schemas/book.schemas';
import { Query as ExpressQuery } from 'express-serve-static-core';

@Controller('book')
export class BookController {
    constructor(private bookService: BookService) { }

    @Get()
    async getAllBooks(@Query() query: ExpressQuery): Promise<Book[]> {
        return this.bookService.findAll(query);
    }

    @Post()
    async createBook(@Body() book: CreateBookDTO): Promise<Book> {
        return this.bookService.create(book)
    }

    @Get(':id')
    async getBook(@Param('id') id: string): Promise<Book> {
        return this.bookService.findById(id);
    }

    @Put(':id')
    async updateBookById(@Param('id') id: string, @Body() book: UpdateBookDTO): Promise<Book> {
        return this.bookService.updateById(id, book)
    }

    @Delete(':id')
    async deleteBookById(@Param('id') id: string) {
        return this.bookService.deleteById(id);
    }
}
