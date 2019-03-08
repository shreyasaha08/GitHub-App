import { Component, OnInit } from '@angular/core';
import { GitserviceService} from './../../gitservice.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { routerNgProbeToken } from '@angular/router/src/router_module';
@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  
  public username: any;
  public password: any;
  public userDetails;

  public newArr=[];


  constructor(
    public router: Router,
    public gitservice:GitserviceService,
    public toastr:ToastrService)
     { }

  ngOnInit() {

    this.userDetails=[];

    
 
    this.username=Cookie.get('username');
    if(this.username!=null && this.username!=undefined)
   
  
      this.fetchrepos();
}
  public fetchrepos(): any{
    
    let newArr=[];


  
  this.gitservice.fetchrepos(this.username).subscribe(
      data=>
      {

      console.log(data);
      this.router.navigate(['/repository']);

      
         

      
      },
      error=>
          {
            console.log(error.errorMessage)
          }

  )


  }
}
