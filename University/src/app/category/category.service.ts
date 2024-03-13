import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../../Entities/Category.model';

const url = "http://localhost:5024";

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    getCategories() {
        return this._http.get<Category[]>(`${url}/categories`);
    }

    addCategory(category: Category) {
        return this._http.post(`${url}/categories`, category);
    }

    constructor(private _http: HttpClient) { }
}