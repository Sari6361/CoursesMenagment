import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule, FormsModule ],
  //כל מי שיבקש את הסרוויס הזה מהעץ הזה ומטה יוכל לקבל אותו
  providers:[UserService]
})
export class UserModule { }
