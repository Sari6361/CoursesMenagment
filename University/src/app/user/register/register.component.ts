import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {

  public registerUser: FormGroup;
  
  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this.registerUser= new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'addres':new FormControl(""),
      'email':new FormControl(""),
      'password':new FormControl("",[Validators.required, Validators.minLength(5)]),
      'role':new FormControl(1,[Validators.required])
    })
  }

  public Save(){
    let u=this.registerUser.value;
    this._userService.addUser(u).subscribe({
      next: (res) => {
        console.log("user: ",res);
      },
      error: (err) => {
        console.log("user: ",err);
      }
    });
//    return u;
  }


}
