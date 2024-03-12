import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './basic-pages/home/home.component';
import { NotFoundComponent } from './basic-pages/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { LogInComponent } from './user/log-in/log-in.component';
import { RegisterInComponent } from './user/register-in/register-in.component';
import { AllCoursesComponent } from './course/all-courses/all-courses.component';
import { AddEditCourseComponent } from './course/add-edit-course/add-edit-course.component';
import { CourseDetailesComponent } from './course/course-detailes/course-detailes.component';

export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch: "full"},
    {path:"home", component:HomeComponent},
    {path:"user", loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)},
    {path:"course", loadChildren:()=>import('./course/course.module').then(c=>c.CourseModule)},
    { path: "**", component: NotFoundComponent }
];
