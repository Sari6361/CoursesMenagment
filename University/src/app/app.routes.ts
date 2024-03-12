import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './basic-pages/not-found/not-found.component';
import { HomeComponent } from './basic-pages/home/home.component';
import { NgModule } from '@angular/core';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AllCoursesComponent } from './course/all-courses/all-courses.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { CourseDetailesComponent } from './course/course-detailes/course-detailes.component';

export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch: "full"},
    {path:"home", component:HomeComponent},
    {path:"user/logIn", component:LoginComponent},
    {path:"user/registerIn", component:RegisterComponent},
    {path:"user/editProfile/:id", component:RegisterComponent},
    { path: 'course/all', component: AllCoursesComponent },
    { path: 'course/my/:id', component: AllCoursesComponent },
    { path: 'course/add', component: AddCourseComponent },
    { path: "course/edit/:id", component: AddCourseComponent },
    { path: "course/detailes", component: CourseDetailesComponent },
    // {path:"user", loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)},
    // {path:"course", loadComponent:()=>import('./course/course.module').then(c=>c.CourseModule)},
    
    { path: "**", component: NotFoundComponent }
];


// @NgModule({
//     declarations: [],
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
// })
// export class AppRoutingModule { }

