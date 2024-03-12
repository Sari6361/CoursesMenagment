// import { HttpClient } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Entities/User.model';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient, private _router: Router) { }

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(`/users/${id}`);
  }

  loginUser(name: string, password: string): boolean {

    let users: User[];

    this._http.get<User[]>('/users').subscribe({
      next: (data) => {
        users = data;
        console.log("service user", users);
        
      }
    });

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
  }

  addUser(user: User): Observable<User> {
    console.log("service", user);
    let users: User[];

    this._http.get<User[]>('/users').subscribe({
      next: (data) => {
        // users = data;
        console.log(data,"get")
      },
      error:(err)=>console.log(err)      
    });

    if (users.find(u => u.name == user.name && u.password == user.password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User exist",
      });
      return null;
    }

    return this._http.post(`/users`, user);
  }

  updateUser(user: User): Observable<User> {
    return this._http.put(`/users/${user.id}`, user);
  }

}
