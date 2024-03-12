import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../Entities/User.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { Category } from '../../../Entities/Category.model';
import { CategoryService } from '../../category.service';
import { FormArray } from '@angular/forms';
import {AddCategoryComponent} from '../../add-category/add-category.component'

@Component({
    selector: 'app-add-course',
    standalone: true,
    templateUrl: './add-course.component.html',
    styleUrl: './add-course.component.css',
    imports: [CommonModule, ReactiveFormsModule, AddCategoryComponent]
})
export class AddCourseComponent implements OnInit {

  public courseForm: FormGroup;
  public categories: Category[];
  public user: User;
  public add:boolean=false;
  

  constructor(private _courseService: CourseService, private _categoriesService: CategoryService, private _router: Router, private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    if (localStorage.getItem("user") != null)
      this.user = JSON.parse(localStorage.getItem("user"));
    this.courseForm = new FormGroup({
      "id": new FormControl(''),
      "name": new FormControl('', [Validators.required]),
      "categoryId": new FormControl('', [Validators.required]),
      "lessonsCount": new FormControl('', [Validators.required]),
      "startDate": new FormControl('', [Validators.required]),
      "learningWay": new FormControl('', [Validators.required]),
      "lecturerId": new FormControl(this.user.id),
      "imgRouting": new FormControl('', [Validators.required]),
     "syllabus" :this._formBuilder.array([this._formBuilder.control('')])
    })
    this._categoriesService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      }, 
      error:(err)=>console.log(err)
    })

  }

  get syllabus() {
    return this.courseForm.get('syllabus') as FormArray;
  }

  public addLine() {
    this.syllabus.push(this._formBuilder.control(''));
  }

  public Save() {
    let u = this.courseForm.value;
    this._courseService.addCourse(u).subscribe({
      next: (course) => {
        console.log("course: ", course);
        Swal.fire({
          title: `Welcome! ${course.name}`,
          text: "have been added successfuly!",
          icon: "success"
        });
        this._router.navigate(['/allCourses']);
      },
      error: (err) => {
        console.log("add-course:", u,err);
        this._router.navigate(['/allCourses']);
      }
    });
  }

  }


