import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../Entities/Course.model';
import { User } from '../../Entities/User.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public getAllCourses(){
    return this._http.get<Course[]>('/api/courses');
  }

  public getCourseById(id:number){
    return this._http.get<Course>(`/api/courses/${id}`);
  }

  public addCourse(course:Course){
    return this._http.post(`/api/courses`,course );
  }

  public updateCourse(course:Course){
    return this._http.put(`/api/courses/${course.id}`, course);
  }
  constructor(private _http:HttpClient) { }
}
