import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterInComponent } from './register-in/register-in.component';
import { LogInComponent } from './log-in/log-in.component';


const userRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'registerIn', component: RegisterInComponent },
  { path: 'editProfile', component: RegisterInComponent },
  { path: "logIn", component: LogInComponent },
//   { path: 'logOut', component: ProductsComponent },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
 