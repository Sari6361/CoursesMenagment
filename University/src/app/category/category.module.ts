import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from './add-category/add-category.component';
import { CategoryService } from './category.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, AddCategoryComponent],
    providers:[CategoryService]
})
export class CategoryModule { }
