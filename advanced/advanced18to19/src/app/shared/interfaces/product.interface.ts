import { ICategory } from './category.interface';

export interface IProduct {
    id: number;
    category: ICategory;
    name: string;
    description: string;
    price: number;
    image: string;
}
