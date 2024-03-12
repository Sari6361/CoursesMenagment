import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../Entities/Course.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public getAllCourses():Observable<Course[]>{
    return this._http.get<Course[]>('/courses');
  }

  public getCourseById(id:number):Observable<Course>{
    return this._http.get<Course>(`/courses/${id}`);
  }

  public addCourse(course:Course):Observable<Course>{
    return this._http.post(`/courses`,course );
  }

  public updateCourse(course:Course):Observable<Course>{
    return this._http.put(`/courses/${course.id}`, course);
  }

  public deleteCourse(courseId:number){
    return this._http.delete(`/courses/${courseId}`);
  }
  
  constructor(private _http:HttpClient) { }

}
