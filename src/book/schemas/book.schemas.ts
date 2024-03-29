import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category {
    ADVENTURE = 'Adventure',
    CLASSICS = 'Classics',
    CRIME = 'Crime',
    FANTASY = 'Fantasy'
}

@Schema({
    timestamps: true
})
export class Book {
    @Prop({ minlength: [5, 'Title must be at least 5 characters'] })
    title: string;

    @Prop()
    description: string;

    @Prop()
    author: string;

    @Prop()
    price: number;

    @Prop()
    category: Category;
}

export const BookSchema = SchemaFactory.createForClass(Book);