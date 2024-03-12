import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../../Entities/Course.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../Entities/User.model';
import { CourseService } from '../course.service';
import { CategoryService } from '../../category/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-edit-course',
  standalone: true,
  imports: [],
  templateUrl: './add-edit-course.component.html',
  styleUrl: './add-edit-course.component.scss'
})
export class AddEditCourseComponent  implements  OnInit{

  constructor(private _courseService: CourseService, private _categoriesService: CategoryService, private _router: Router, private _formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.user=JSON.parse(sessionStorage.getItem("user"));
  }

  public CourseForm:FormGroup;
  public user:User;
  private _course:Course;
 
  public get course(): Course | undefined {
    return this._course;
  }

  @Input()
  public set course(value: Course | undefined) {
    this._course = value;
    if (this.course != undefined)
      this.CourseForm = new FormGroup({
        "id": new FormControl(this.course.id),
        "name": new FormControl(this.course.name, [Validators.required]),
        "categoryId": new FormControl(this.course.categoryId, [Validators.required]),
        "lessonsCount": new FormControl(this.course.lessonsCount, [Validators.required]),
        "startDate": new FormControl(this.course.startDate, [Validators.required]),
        "learningWay": new FormControl(this.course.learningWay, [Validators.required]),
        "lecturerId": new FormControl(this.user.id),
        "imgRouting": new FormControl(this.course.imgRouting, [Validators.required]),
       "syllabus" :this._formBuilder.array(this.course.syllabus)
      });
  }
}
