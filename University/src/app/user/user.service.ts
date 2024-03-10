import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../Entities/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  getUserById(id: number): Observable<User> {
    return this._http.get<User>(`/api/users/${id}`);
  }

  loginUser(name:string, password:string):Observable<User>{
    return this._http.put(`api/users/{name}`,{name:name,password: password});
  }

  addUser(user:User):Observable<User>{ 
    return this._http.post(`/api/users`,user);
  }

  updateUser(user:User):Observable<User>{
    return this._http.put(`/api/users/${user.id}`,user);
  }

  constructor(private _http: HttpClient) { }
}
