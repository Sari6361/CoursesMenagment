import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';



@NgModule({
  declarations: [],
  imports: [CommonModule ],
  //כל מיני שיבקש את הסרוויס הזה מהעץ הזה ומטה יוכל לקבל אותו
  providers:[UserService]
})
export class UserModule { }
