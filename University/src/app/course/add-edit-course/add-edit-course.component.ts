import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../../Entities/Course.model';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../Entities/User.model';
import { CourseService } from '../course.service';
import { CategoryService } from '../../category/category.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Category } from '../../../Entities/Category.model';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { AddCategoryComponent } from "../../category/add-category/add-category.component";

@Component({
    selector: 'app-add-edit-course',
    standalone: true,
    templateUrl: './add-edit-course.component.html',
    styleUrl: './add-edit-course.component.scss',
    imports: [ReactiveFormsModule, CommonModule, AddCategoryComponent]
})
export class AddEditCourseComponent implements OnInit {

  constructor(private _courseService: CourseService, private _categoriesService: CategoryService, private _router: Router, private _formBuilder: FormBuilder, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("user"));
    if (!this.user)
      this._router.navigate(['/']);
    this._route.params.subscribe((param) => {
      if (param['id'] != null)
        this._courseService.getCourseById(param['id']).subscribe({
          next: (data) => {
            this.course = data;
            this.add = false;
          },
          error: (err) => console.log(err.message)
        })
    });

    this._categoriesService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => console.log(err)
    })

  }

  public courseForm: FormGroup;
  public user: User;
  private _course: Course;
  public add: boolean = true;
  public categories: Category[];

  public get course(): Course | undefined {
    return this._course;
  }

  @Input()
  public set course(value: Course | undefined) {
    this._course = value;
    if (!this.add)
      this.courseForm = new FormGroup({
        "id": new FormControl(this.course.id),
        "name": new FormControl(this.course.name, [Validators.required]),
        "categoryId": new FormControl(this.course.categoryId, [Validators.required]),
        "lessonsCount": new FormControl(this.course.lessonsCount, [Validators.required]),
        "startDate": new FormControl(this.course.startDate, [Validators.required]),
        "learningWay": new FormControl(this.course.learningWay, [Validators.required]),
        "lecturerId": new FormControl(this.user.id),
        "imgRouting": new FormControl(this.course.imgRouting, [Validators.required]),
        "syllabus": this._formBuilder.array(this.course.syllabus)
      });

    else {
      this.courseForm = new FormGroup({
        "id": new FormControl(''),
        "name": new FormControl('', [Validators.required]),
        "categoryId": new FormControl('', [Validators.required]),
        "lessonsCount": new FormControl('', [Validators.required]),
        "startDate": new FormControl('', [Validators.required]),
        "learningWay": new FormControl('', [Validators.required]),
        "lecturerId": new FormControl(this.user.id),
        "imgRouting": new FormControl('', [Validators.required]),
        "syllabus": this._formBuilder.array([this._formBuilder.control('')])
      });

    }
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
          title: `---${course.name}---`,
          text: "have been added successfuly!",
          icon: "success"
        });
        this._router.navigate(['/all']);
      },
      error: (err) => {
        console.log("add-course:", u, err);
        this._router.navigate(['/all']);
      }
    });
  }




}
