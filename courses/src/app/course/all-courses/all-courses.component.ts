import { Component, Input } from '@angular/core';
import { CourseService } from '../course.service';
import Swal from 'sweetalert2';
import { Course, LearningWay } from '../../../Entities/Course.model';
import { Category } from '../../../Entities/Category.model';
import { User } from '../../../Entities/User.model';
import { Router } from '@angular/router';
import { CategoryService } from '../../category/category.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule, FormsModule, ],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.scss'
})
export class AllCoursesComponent {
  courses: Course[];
  categories: Category[];
  user: User;

  //filters
  @Input()
  name: string;
  @Input()
  category: Category;
  @Input()
  startDate: Date;
  @Input()
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
      (this.startDate == null || this.startDate == c.startDate) &&
      (this.learningWay==null || this.learningWay==c.learningWay));
  }

  reset() {
    this.name='';
    this.category=null;
    this.startDate=null;
    this.learningWay=null;
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
        console.log("c",data);
        this.courses = data;
        console.log(this.courses);
      }
    });
    // this._categoriesService.getCategories().subscribe({
    //   next: (data) => {
    //     this.categories = data;
    //   },
    //   error: (err) => console.log(err)
    // })
    this.user = JSON.parse(sessionStorage.getItem("user"));
  }


}
