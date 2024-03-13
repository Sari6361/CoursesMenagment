import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CourseRoutingModule } from './course-routing.module';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { CourseDetailesComponent } from './course-detailes/course-detailes.component';
import { CourseService } from './course.service';
import { UserService } from '../user/user.service';
import { CategoryService } from '../category/category.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [ CommonModule,RouterModule ,CourseRoutingModule , AddEditCourseComponent, AllCoursesComponent, CourseDetailesComponent, HttpClientModule,ReactiveFormsModule, FormsModule],
    exports:[RouterModule],
    providers:[CourseService, UserService, CategoryService]
})
export class CourseModule { }
