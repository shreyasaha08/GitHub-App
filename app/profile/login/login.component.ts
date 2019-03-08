import { Component, OnInit } from '@angular/core';
import { GitserviceService } from './../../gitservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Cookie } from 'ng2-cookies/ng2-cookies';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: any;
  public password: any;
  


  constructor(
    public router: Router,
    public gitservice:GitserviceService,
    public toastr:ToastrService


  ) { }

  ngOnInit() {
  }

  public signinFunction: any = () => {

    if (!this.username) {
      this.toastr.warning('enter email')


    } else if (!this.password) {

      this.toastr.warning('enter password')


    } else {

      this.gitservice.signinFunction(this.username,this.password).subscribe(
        user=>
        {
          console.log(user);

          Cookie.set('username',user.login);

          

          this.router.navigate(['/user']);
          

        },
          error=>
          {
            console.log(error.errorMessage)
          }
      )

      
        

}
}
}