import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Entities/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(`/users/${id}`);
  }

  loginUser(name:string, password:string):Observable<User>{
    return this._http.put(`/users/{name}`,{name:name,password: password});
  }

  addUser(user:User):Observable<User>{ 
    console.log("service",user);
    return this._http.post(`/users`,user);
  }

  updateUser(user:User):Observable<User>{
    return this._http.put(`/users/${user.id}`,user);
  }

  constructor(private _http: HttpClient) { }
}
