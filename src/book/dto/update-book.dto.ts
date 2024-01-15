import { IsOptional, IsString, IsNumber, IsEnum } from 'class-validator';
import { Category } from './../schemas/book.schemas';
export class UpdateBookDTO {
    @IsString()
    @IsOptional()
    readonly title: string;

    @IsString()
    @IsOptional()
    readonly description: string;

    @IsString()
    @IsOptional()
    readonly author: string;

    @IsNumber()
    @IsOptional()
    readonly price: number;

    @IsEnum(Category)
    @IsOptional()
    readonly category: Category;
}