import { IsEmpty, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Category } from './../schemas/book.schemas';
export class CreateBookDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsString()
    @IsNotEmpty()
    readonly author: string;

    @IsNumber()
    @IsNotEmpty()
    readonly price: number;

    @IsEnum(Category, {message: 'Please enter corret category'})
    @IsNotEmpty()
    readonly category: Category;

}