import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { NotFoundComponent } from '../../basic-pages/not-found/not-found.component';


const userRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'logIn', component: LoginComponent },
  { path: 'registerIn/:name', component: RegisterComponent },
  { path: 'update', component: UpdateProfileComponent },
  { path: '**', component: NotFoundComponent }
]
 

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
