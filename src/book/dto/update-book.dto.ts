import { Category } from './../schemas/book.schemas';
export class UpdateBookDTO {
    readonly title: string
    readonly description: string
    readonly author: string
    readonly price: number
    readonly category: Category

}