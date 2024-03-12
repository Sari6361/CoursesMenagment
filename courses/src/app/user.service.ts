// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Entities/User.model';
import { UserModel } from '../Entities/UserModel.model'
const url = "http://localhost:5024";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private _http: HttpClient, private _router: Router) { }

  getUsers(): Observable<User[]> {
    return this._http.get<User[]>(`${url}/users`);
  }

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(`${url}/users/${id}`);
  }

  loginUser(name: string, password: string) :boolean{

    let users: User[];

   this.getUsers().subscribe({
      next: (data) => {
         users = data;
        console.log("service user", data);

        let u = users.find(u => u.name == name && u.password == password);
        if (u != null) {
          sessionStorage.setItem("user", JSON.stringify(u));
          return true;
        }

        if (users.find(u => u.name == name))
          return false;
        else
          this._router.navigate(['/registerIn', name]);
        return false;
      },
      error: (err) => console.log("errr", err.message)

    });
    return false;

  }

  addUser(user: User): Observable<User> {
    let u: UserModel = new UserModel(user.name, user.addres, user.email, user.password, user.role);
    console.log("adduser ", u);
    
    return this._http.post(`${url}/users`, u);
  }

  updateUser(user: User): Observable<User> {
    return this._http.put(`${url}/users/${user.id}`, user);
  }

}
