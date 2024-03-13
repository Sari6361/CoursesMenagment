import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { CategoryService } from '../../category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, LearningWay } from '../../../Entities/Course.model';
import { Category } from '../../../Entities/Category.model';

@Component({
  selector: 'app-course-detailes',
  standalone: true,
  imports: [],
  templateUrl: './course-detailes.component.html',
  styleUrl: './course-detailes.component.scss'
})
export class CourseDetailesComponent implements OnInit {

  course: Course;
  category: Category;
  learnType = LearningWay;

  constructor(private _courseService: CourseService, private _categoryService: CategoryService, private _router: Router, private _route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (sessionStorage.getItem("user") == undefined)
      this._router.navigate(['/']);
    let id = this._route.params['id'];
    this._courseService.getCourseById(id).subscribe({
      next: (data) => {
        this.course = data;
      }, error: (err) => console.log(err)
    });

    this._categoryService.getCategories().subscribe({
      next: (d) => {
        if (d)
          this.category = d.find(x => x.id == this.course.categoryId)
      }
    });
  }
}
