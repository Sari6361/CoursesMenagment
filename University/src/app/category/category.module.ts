import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryService } from './category.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, AddCategoryComponent, ReactiveFormsModule],
    providers:[CategoryService]
})
export class CategoryModule { }
