import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '../../Entities/Category.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})

export class AddCategoryComponent implements OnInit {

  public categoryForm: FormGroup;

  public add(){
    let category=this.categoryForm.value;
    this._categoryService.addCategory(category);
  }
   
  constructor(private _categoryService: CategoryService) { }
  ngOnInit(): void {
    this.categoryForm = new FormGroup({
      "id": new FormControl(''),
      "name": new FormControl('', [Validators.required]),
      "iconRouting": new FormControl('', [Validators.required])
    });

    
  }



}
