import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Role, User } from '../../../Entities/User.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public user: User ;
  public role: Role = Role.Lecturer;
  public userId: number = 0;

  constructor(private _router: Router) { }
  ngOnInit(): void {
    if (typeof window !== 'undefined' && sessionStorage.getItem("user") != null)
      this.user = JSON.parse(sessionStorage.getItem("user"));
    if (this.user)
      this.userId = this.user.id;
    console.log(this.user);
  }

  toHomePage() {
    this._router.navigate(['/home']);
  }

  toAllCourses() {
    this._router.navigate(['/course/all']);
  }

  toMyCourses() {
    this._router.navigate([`/course/my`,this.user.id]);
  }

  toAddCourse() {

    this._router.navigate(['/course/add']);
  }

  toLogin() {
    this._router.navigate(['/user/logIn']);
  }

  toRegisterIn() {
    this._router.navigate(['/user/registerIn']);
  }

  toLogout() {
    
  //  this._router.navigate([this._router.getCurrentNavigation()]);
    sessionStorage.setItem("user", "");
  }

}
