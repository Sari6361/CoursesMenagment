import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  public categoryForm: FormGroup;

  public add() {
    let category = this.categoryForm.value;
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
