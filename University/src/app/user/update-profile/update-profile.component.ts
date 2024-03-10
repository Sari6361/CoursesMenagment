import { Component, Input, OnInit, Output } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../../Entities/User.model';
import { EventEmitter } from 'stream';
import { Router, UrlSerializer } from '@angular/router';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit {


  public userForm: FormGroup;

  private _user: User;

  public get user(): User | undefined {
    return this._user;
  }

  @Input()
  public set user(value: User | undefined) {
    this._user = value;
    if (this.user != undefined)
      this.userForm = new FormGroup({
        'id': new FormControl(this.user.id),
        'name': new FormControl(this.user.name, [Validators.required, Validators.minLength(5)]),
        'addres': new FormControl(this.user.addres),
        'email': new FormControl(this.user.email),
        'password': new FormControl(this.user.password, [Validators.required, Validators.minLength(5)]),
        'role': new FormControl(this.user.password, [Validators.required])
      })

  }

  //@Output()
  //onUpdateUser: EventEmitter<User > = new EventEmitter<User>();

  public Update() {

    this._userService.updateUser(this._user).subscribe({
      next: (u) => {
        //this.onUpdateUser.emit(this.user);
        console.log("user update: ", u);
        localStorage.setItem("user", JSON.stringify(u));
        this._router.navigate(['/home']);
      },
      error: (err) => {
        console.log("user update: ", err);
      }
    })
  }

  constructor(private _userService: UserService, private _router:Router) { }
  
  ngOnInit(): void {
    // if (localStorage.getItem("user") != null)
      this.user = JSON.parse(localStorage.getItem("user"));
  }
}
