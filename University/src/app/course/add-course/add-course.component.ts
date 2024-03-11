import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../Entities/User.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  standalone: true,
  imports: [],
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.css'
})
export class AddCourseComponent implements OnInit {

  public courseForm: FormGroup;
  public user: User;

  constructor(private _courseService: CourseService, private _router:Router) { }
  ngOnInit(): void {
    if (localStorage.getItem("user") != null)
      this.user = JSON.parse(localStorage.getItem("user"));
    this.courseForm = new FormGroup({
      "id": new FormControl(''),
      "name": new FormControl('', [Validators.required]),
      "categoryId": new FormControl('', [Validators.required]),
      "lessonsCount": new FormControl('', [Validators.required]),
      "startDate": new FormControl('', [Validators.required]),
      "syllabus": new FormControl(''),
      "learningWay": new FormControl(''),
      "lecturerId": new FormControl(this.user.id),
      "imgRouting":new FormControl('')
    })
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
        console.log("add-course:",u);
        this._router.navigate(['/allCourses']);
      }
    });
  }

}
