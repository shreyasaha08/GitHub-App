import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { GitserviceService } from './../../gitservice.service';
import { Observable } from 'rxjs';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {
  public allDetails = {};
    
    public username;
    public html=[];

  constructor(
    public gitservice:GitserviceService,
    private _route:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
    

    this.username=Cookie.get('username');
    if(this.username!=null && this.username!=undefined)
   
  
      this.fetchrepos();

  }
  public fetchrepos():any{
  
  this.gitservice.fetchrepos(this.username).subscribe(
    data =>{
     console.log(data);
  
    let html = "<div>";
    for (let i = 0; i < data.length; i++) {
        
        html+="<div>";
        html+='<a href="'+data[i].html_url+'">'+data[i].name+"</a>";
        html+="<br>";
        html+=data[i].language;
        html+="<br>";
        html+=data[i].description;
        html+="<br>"
       
        html+= "</div>";
    

    }

    document.getElementById("box").innerHTML = html;
    
    },
    error =>{
      console.log("some error occurred");
      console.log(error.errorMessage);
    }
  )
  
  
  
  
  
  
}
}