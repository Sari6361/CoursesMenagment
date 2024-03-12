import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { User } from '../../../Entities/User.model';

@Component({
  selector: 'app-register-in',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-in.component.html',
  styleUrl: './register-in.component.scss'
})
export class RegisterInComponent {
  public registerUser: FormGroup;
  public name: string = "";

  constructor(private _userService: UserService, private router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this._route.params.subscribe((param) => {
      if (param['name'] != null)
        this.name = param['name']
    });

    this.registerUser = new FormGroup({
      'id': new FormControl(''),
      'name': new FormControl(this.name, [Validators.required, Validators.minLength(5)]),
      'addres': new FormControl(""),
      'email': new FormControl(""),
      'password': new FormControl("", [Validators.required, Validators.minLength(5)]),
      'role': new FormControl(1, [Validators.required])
    })
  }

  public Save() {
    let u = this.registerUser.value;
    let users: User[];
    console.log("save", u);

    this._userService.getUsers().subscribe({
      next: (data) => {
        users = data;
        if (users.find(s => u.name == s.name && u.password == s.password)) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "User exist",
          });
          this.router.navigate(['/home']);
        }
        else {
          this._userService.addUser(u).subscribe({
            next: (user) => {
              console.log("user: ", user);
              Swal.fire({
                title: `Welcome! ${user.name}`,
                text: "You've register in successfully!",
                icon: "success"
              });

              sessionStorage.setItem("user", JSON.stringify(user));
              this.router.navigate(['/course/all']);
            },
            error: (err) => {
              console.log("log:", u);
              Swal.fire({
                title: `Oh ${u?.name}`,
                text: "You've problame in registe! please check",
                icon: "error"
              });

              this.router.navigate(['/home']);
              console.log("user: ", err);
            }
          });
        }

      }
    })


  }



}
