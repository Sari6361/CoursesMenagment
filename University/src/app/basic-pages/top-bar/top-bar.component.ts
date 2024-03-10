import { Component } from '@angular/core';
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
export class TopBarComponent {

  public user:User;
  public role:Role=Role.Lecturer;

  constructor(private _router:Router) {}

  toHomePage() {
    this._router.navigate(['/home'])
  }

  toAllCourses(){
    this._router.navigate(['/allCourses'])
  }

  toMyCourses(){
    this._router.navigate(['/myCourses'])
  }

  toAddCourse(){
    this._router.navigate(['/addCourse'])
  }

  taLogin(){
    this._router.navigate(['/user/logIn'])
  }

  toRegisterIn(){
    this._router.navigate(['/user/registerIn'])
  }

}


