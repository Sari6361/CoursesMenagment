import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Role } from '../../../Entities/User.model';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public registerUser: FormGroup;

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.registerUser = new FormGroup({
      'id': new FormControl(''),
      'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'addres': new FormControl(""),
      'email': new FormControl(""),
      'password': new FormControl("", [Validators.required, Validators.minLength(5)]),
      'role': new FormControl(1, [Validators.required])
    })
  }

  public Save() {
    let u = this.registerUser.value;
    this._userService.addUser(u).subscribe({
      next: (user) => {
        console.log("user: ", user);
        Swal.fire({
          title: `Welcome! ${user.name}`,
          text: "You've register in successfully!",
          icon: "success"
        });
        localStorage.setItem("user", JSON.stringify(user));
        this.router.navigate(['/home']);
      },
      error: (err) => {
        Swal.fire({
          title: `Oh ${u?.name}`,
          text: "You've problame in registe! please check name and password",
          icon: "error"
        });
        this.router.navigate(['/home']);
        console.log("user: ", err);
      }
    });
  }


}
