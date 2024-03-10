import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../Entities/Course.model';
import { User } from '../../Entities/User.model';
import { Category } from '../../Entities/Category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    getCategories() {
        return this._http.get<Category[]>(`/categories`);
    }

    addCategory(category: string) {
        return this._http.post(`/categories`, category);
    }

    constructor(private _http: HttpClient) { }
}