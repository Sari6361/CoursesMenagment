import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { UserService } from '../user/user.service';



@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, HeaderComponent, HomeComponent],
  providers: [UserService]
})
export class BasicPagesModule { }
