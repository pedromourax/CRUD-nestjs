import { Body, Controller, Delete, Get, Param, Post, Put, Req, Res } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./book.model";
import { response, request } from "express";

@Controller("api/v1/books")
export class BookController {

    constructor(private readonly bookService: BookService) { }

    @Get(':id')
    async getBook(@Param('id') id: number): Promise<Book | null> {
        return this.bookService.getBook(id)
    }

    @Get()
    async getAllBook(): Promise<Book[]> {
        return this.bookService.getAllBook()
    }

    @Post()
    async createBook(@Body() postData: Book): Promise<Book> {
        return this.bookService.createBook(postData)
    }

    @Put(':id')
    async editBook(@Param('id') id: number, @Body() postData: Book): Promise<Book> {
        return this.bookService.editBook(id, postData)
    }

    @Delete(':id')
    async deleteBook(@Param('id') id: number): Promise<Book> {
        return this.bookService.deleteBook(id)
    }
}