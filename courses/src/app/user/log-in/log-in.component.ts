import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Course } from '../../../Entities/Course.model';
import { UserService } from '../../user.service';
import { CourseService } from '../../course/course.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  public userLogin: FormGroup;
  public show: boolean = false;
  public lectaruer:boolean=false;
  public courses:Course[];

  constructor(private _userService: UserService,private _courseService:CourseService, private _router: Router) { }

  ngOnInit(): void {
   
    this.userLogin = new FormGroup({
      'password': new FormControl('',[Validators.required]),
      'name': new FormControl('', [Validators.required]),
      'course':new FormControl('')
    });
   
    this._courseService.getAllCourses().subscribe({
      next:(data)=>{console.log(data);
       this.courses=data;}
    })

  }

  public Login() {

    if (this._userService.loginUser(this.userLogin.controls['name'].value, this.userLogin.controls['password'].value)) {
      let user = JSON.parse(sessionStorage.getItem("user"));
      console.log("user: ", user);
      Swal.fire({
        title: `Welcome! ${user.name}`,
        text: "we are fun you come in back!",
        icon: "success"
      });
      this._router.navigate(['/home']);
    }
  }
}
