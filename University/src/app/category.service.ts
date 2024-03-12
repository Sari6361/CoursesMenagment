import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../Entities/Category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    getCategories() {
        return this._http.get<Category[]>(`/categories`);
    }

    addCategory(category: Category) {
        return this._http.post(`/categories`, category);
    }

    constructor(private _http: HttpClient) { }
}