import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from '../../../Entities/User.model';
import { CommonModule } from '@angular/common';
import { Role } from '../../../Entities/User.model';


@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit {

  public user: User | undefined;
  public role: Role = Role.Lecturer;
  public userId: number = 0;

  constructor(private _router: Router) { }
  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage.getItem("user")!=null )
      this.user = JSON.parse(localStorage.getItem("user"));
    if (this.user)
      this.userId = this.user.id;
    console.log(this.user);

  }

  toHomePage() {
    this._router.navigate(['/home']);
  }

  toAllCourses() {
    this._router.navigate(['/course/allCourses']);
  }

  toMyCourses() {
    this._router.navigate(['/course/myCourses']);
  }

  toAddCourse() {

    this._router.navigate(['/course/addCourse']);
  }

  toLogin() {
    this._router.navigate(['/user/logIn']);
  }

  toRegisterIn() {
    this._router.navigate(['/user/registerIn']);
  }

  toLogout() {
    localStorage.setItem("user", null);
  }

}


