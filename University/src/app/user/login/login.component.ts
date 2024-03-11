import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../Entities/User.model';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { TopBarComponent } from "../../basic-pages/top-bar/top-bar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  imports: [ReactiveFormsModule, CommonModule, TopBarComponent]
})

export class LoginComponent implements OnInit {

  public userLogin: FormGroup;



  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit(): void {
    this.userLogin = new FormGroup({
      'password': new FormControl([Validators.required]),
      'name': new FormControl('', [Validators.required])
    });
  }

  public Login() {

    this._userService.loginUser(this.userLogin.controls['name'].value, this.userLogin.controls['password'].value).subscribe({
      next: (user) => {
        console.log("user: ", user);
        Swal.fire({
          title: `Welcome! ${user.name}`,
          text: "we are fun you come in back!",
          icon: "success"
        });
        localStorage.setItem("user", JSON.stringify(user));
        this._router.navigate(['/home']);
      },
      error: (err) => {
        console.log(err);
        this._router.navigate(['registerIn']);
      }
    })

  }

}
