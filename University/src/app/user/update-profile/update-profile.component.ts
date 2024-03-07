import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../../Entities/User.model';

@Component({
  selector: 'app-update-profile',
  standalone: true,
  imports: [],
  templateUrl: './update-profile.component.html',
  styleUrl: './update-profile.component.css'
})
export class UpdateProfileComponent implements OnInit {


  private _user: User;
  public userForm: FormGroup;

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

  public Update() {

    this._userService.updateUser(this._user).subscribe({
      next: (res) => {
        console.log("user update: ", res);
      },
      error: (err) => {
        console.log("user update: ", err);
      }
    })
  }

  constructor(private _userService: UserService) { }
  ngOnInit(): void {}



}
