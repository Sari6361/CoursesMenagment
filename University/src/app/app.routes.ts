import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './basic-pages/not-found/not-found.component';
import { HomeComponent } from './basic-pages/home/home.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:"", redirectTo:"home",pathMatch: "full"},
    {path:"home", component:HomeComponent},
    {path:"user", loadChildren:()=>import('./user/user.module').then(u=>u.UserModule)},
    {path:"course", loadComponent:()=>import('./course/course.module').then(c=>c.CourseModule)},
    { path: "**", component: NotFoundComponent }
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

