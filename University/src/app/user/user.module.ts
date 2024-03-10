import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing/user-routing.module';
import { CourseService } from '../course/course.service';


 
@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, UserRoutingModule ],
  //כל מי שיבקש את הסרוויס הזה מהעץ הזה ומטה יוכל לקבל אותו
  providers:[UserService, CourseService]
})
export class UserModule { }
