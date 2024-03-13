import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterInComponent } from './register-in/register-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { CourseService } from '../course/course.service';

 
@NgModule({
  declarations: [],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule, FormsModule, HttpClientModule, RegisterInComponent, LogInComponent],
  providers: [UserService, CourseService]
})
export class UserModule { }
