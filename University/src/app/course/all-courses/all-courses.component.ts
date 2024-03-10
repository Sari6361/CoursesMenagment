import { Component, OnInit, Output } from '@angular/core';
import { Course } from '../../../Entities/Course.model';
import { CourseService } from '../course.service';
import { EventEmitter } from 'stream';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../../Entities/User.model';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-all-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './all-courses.component.html',
  styleUrl: './all-courses.component.css'
})
export class AllCoursesComponent implements OnInit{
 
  courses:Course[];
  user:User;

  // @Output()
  // onUpdatePress:EventEmitter<Course>=new EventEmitter();

  // @Output()
  // onMoreDetailes:EventEmitter<Course>=new EventEmitter();

  update(course:Course){
    // this.onUpdatePress.emit(course);
    this._router.navigate(['/updateCourse',course]);
  }

  moreDetailes(course:Course){
    // this.onMoreDetailes.emit(course);
    this._router.navigate(['/moreDetailes',course]);
  }

  deleteCourse(courseId:number){
    this._courseService.deleteCourse(courseId).subscribe({
      next:(data)=>{ }});

  }
  constructor(private _courseService:CourseService,private _userService:UserService, private _router:Router) {  }
 
  ngOnInit(): void {
    this._courseService.getAllCourses().subscribe({
      next:(data) =>{
        this.courses=data;
      }});
      this.user=JSON.parse(localStorage.getItem("user"));
  }


}
