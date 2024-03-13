import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../../Entities/Course.model';
import { HttpClient } from '@angular/common/http';
import { CourseModel } from '../../Entities/CourseModel.model';

const url = "http://localhost:5024";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public getAllCourses():Observable<Course[]>{
    return this._http.get<Course[]>(`${url}/courses`);
  }

  public getCourseById(id:number):Observable<Course>{
    return this._http.get<Course>(`${url}/courses/${id}`);
  }

  public addCourse(course:CourseModel):Observable<CourseModel>{
    return this._http.post(`${url}/courses`,course );
  }

  public updateCourse(course:Course):Observable<Course>{
    return this._http.put(`${url}/courses/${course.id}`, course);
  }

  public deleteCourse(courseId:number){
    return this._http.delete(`${url}/courses/${courseId}`);
  }
  
  constructor(private _http:HttpClient) { }

}
