import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Entities/User.model';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(`/users/${id}`);
  }

  checkAddition(user: User): boolean {
    let users: User[];

    this._http.get<User[]>('/users').subscribe({
      next: (data) => {
        users = data;
      }
    });

    let u = users.find(u => u.name == user.name && u.addres == user.addres);
    if (u != null)
      return false;
    return true;
  }

  loginUser(name: string, password: string): boolean {

    let users: User[];

    this._http.get<User[]>('/users').subscribe({
      next: (data) => {
        users = data;
      }
    });

    let u = users.find(u => u.name == name && u.password == password);
    if (u != null) {
      localStorage.setItem("user", JSON.stringify(u));
      return true;
    }

    if (users.find(u => u.name == name))
      return false;
    else
      this._router.navigate(['registerIn', name]);
    return false;
  }

  addUser(user: User): Observable<User> {
    console.log("service", user);
    let users: User[];

    this._http.get<User[]>('/users').subscribe({
      next: (data) => {
        users = data;
      }
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

  constructor(private _http: HttpClient, private _router: Router) { }
}
