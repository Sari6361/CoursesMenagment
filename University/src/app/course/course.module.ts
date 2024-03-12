import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from './course.service';
import { CourseRoutingModule } from './course-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user/user.service';
import { CategoryService } from '../category.service';



@NgModule({
  declarations: [],
  imports: [CommonModule,CourseRoutingModule, ReactiveFormsModule, FormsModule ],
  providers:[CourseService, UserService]
})
export class CourseModule { }
