import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { RouterModule,Routes } from '@angular/router';

@NgModule({
  declarations: [ViewuserComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'user',component: ViewuserComponent}
      

    
    ])
  ]
})
export class UserModule { }
