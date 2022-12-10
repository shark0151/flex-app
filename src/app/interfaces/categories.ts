import { Observable } from "rxjs";

export class Categories {
    static categories: Observable<Category>;
    static getCategories(): Observable<Category> {
        return Categories.categories;
    }
    static setCategories(categories: Observable<Category>) {
        Categories.categories = categories;
    }
}

export interface Category {
    id: number;
    name: string;
}