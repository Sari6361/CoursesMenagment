import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  public userLogin: FormGroup;
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.userLogin = new FormGroup({
      'password': new FormControl([Validators.required]),
      'name': new FormControl('', [Validators.required])
    });
  }



  public Login() {
    //this._userService.getUserById()
  }

}
