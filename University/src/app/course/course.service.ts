import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../../Entities/Course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public getAllCourses(){
    return this._http.get<Course[]>('/courses');
  }

  public getCourseById(id:number){
    return this._http.get<Course>(`/courses/${id}`);
  }

  public addCourse(course:Course){
    return this._http.post(`/courses`,course );
  }

  public updateCourse(course:Course){
    return this._http.put(`/courses/${course.id}`, course);
  }

  public deleteCourse(courseId:number){
    return this._http.delete(`/courses/${courseId}`);
  }
  
  constructor(private _http:HttpClient) { }
}
