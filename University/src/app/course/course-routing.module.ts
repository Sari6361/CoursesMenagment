import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { AddEditCourseComponent } from './add-edit-course/add-edit-course.component';
import { CourseDetailesComponent } from './course-detailes/course-detailes.component';


const courseRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'all', component: AllCoursesComponent },
    { path: 'my/:id', component: AllCoursesComponent },
    { path: 'add', component: AddEditCourseComponent },
    { path: "edit/:id", component: AddEditCourseComponent },
    { path: "detailes", component: CourseDetailesComponent }
]

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(courseRoutes)
    ],
    exports: [RouterModule]
})
export class CourseRoutingModule { }
