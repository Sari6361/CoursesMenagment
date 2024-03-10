import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddCourseComponent } from "./add-course/add-course.component";
import { UpdateCourseComponent } from "./update-course/update-course.component";

const courseRoutes: Routes = [
    { path: "/", redirectTo: "", pathMatch: "full" },
    { path: "/updateCourse",component:UpdateCourseComponent},
    { path: "/addCourse", component:AddCourseComponent},
    { path: "/allCourses",},
    { path: "/", }
]


@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(courseRoutes)],
    exports: [RouterModule]
})
export class CourseRoutingModule { }