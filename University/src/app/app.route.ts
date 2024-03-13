import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './basic-pages/home/home.component';
import { NotFoundComponent } from './basic-pages/not-found/not-found.component';

export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch: "full"},
    {path:"home", component:HomeComponent},
    {path:"user", loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)},
    {path:"course", loadChildren:()=>import('./course/course.module').then(c=>c.CourseModule)},
    { path: "**", component: NotFoundComponent }
];
