import { Component, OnInit } from '@angular/core';
import { Course } from '../../../Entities/Course.model';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../Entities/User.model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-course-detailes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-detailes.component.html',
  styleUrl: './course-detailes.component.css'
})
export class CourseDetailesComponent implements OnInit {

  public course: Course;
  public courseId: number;
  public lecteruer: User;

  constructor(private _route: ActivatedRoute, private _courseService: CourseService, private _userService: UserService) { }

  ngOnInit(): void {
    this._route.params.subscribe(async (param) => {
      this.courseId = param['id'];
      await this._courseService.getCourseById(this.courseId).subscribe({
        next: (res) => {
          this.course = res
        },
        error: (err) => {
          console.log(err);
        }
      })
    });
    this._userService.getUserById(this.course.lecturerId).subscribe({
      next: (res) => {
        this.lecteruer = res;
      },
      error: (err) => {
        console.log(err);      
      }
    });


  }





}
