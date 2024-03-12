import { Component, OnInit } from '@angular/core';
import { Course, LearningWay } from '../../../Entities/Course.model';
import { CourseService } from '../course.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../../Entities/User.model';
import Swal from 'sweetalert2';
import { Category } from '../../../Entities/Category.model';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent implements OnInit {

  courses: Course[];
  categories: Category[];
  user: User;

  //filters
  name: string;
  category: Category;
  countLessons: number;
  startDate: Date;
  learningWay:LearningWay;


  update(course: Course) {
    this._router.navigate(['/updateCourse', course]);
  }

  moreDetailes(course: Course) {
    if (localStorage.getItem("user"))
      this._router.navigate([`/courseDetailes`, course.id]);
    else
    alert('please log / sign In')
  }

  deleteCourse(courseId: number) {
    this._courseService.deleteCourse(courseId).subscribe({
      next: () => {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        Toast.fire({
          icon: "success",
          title: "deleted successfully"
        });
      }
    });

  }

  onSubmit() {
    this.courses = this.courses.filter((c) =>
      (this.name == null || this.name == c.name) &&
      (this.category.id == null || this.category.id == c.categoryId) &&
      (this.countLessons == 0 || this.countLessons == c.lessonsCount) &&
      (this.startDate == null || this.startDate == c.startDate) &&
      (this.learningWay==null || this.learningWay==c.learningWay));
  }

  reset() {
    this._courseService.getAllCourses().subscribe({
      next: (data) => {
        this.courses = data;
      }
    });
  }

  constructor(private _courseService: CourseService, private _categoriesService: CategoryService, private _router: Router) { }

  ngOnInit(): void {
    this._courseService.getAllCourses().subscribe({
      next: (data) => {
        this.courses = data;
      }
    });
    this._categoriesService.getCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => console.log(err)
    })
    this.user = JSON.parse(localStorage.getItem("user"));
  }


}
