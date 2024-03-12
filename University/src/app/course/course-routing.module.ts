import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCourseComponent } from "./add-course/add-course.component";
import { UpdateCourseComponent } from "./update-course/update-course.component";
import { AllCoursesComponent } from "./all-courses/all-courses.component";
import { NotFoundComponent } from "../basic-pages/not-found/not-found.component";
import { CourseDetailesComponent } from "./course-detailes/course-detailes.component";

const courseRoutes: Routes = [
    { path: '/', redirectTo: 'home', pathMatch: 'full' },
    { path: "/allCourses", component: AllCoursesComponent },
    { path: "/myCourses", component: AllCoursesComponent },
    { path: "/updateCourse", component: UpdateCourseComponent },
    { path: "/addCourse", component: AddCourseComponent },
    { path: "/courseDetailes/:id", component: CourseDetailesComponent },
    { path: "**", component: NotFoundComponent }
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(courseRoutes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }