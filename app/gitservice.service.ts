import { Injectable } from '@angular/core';

 //import observable related code
import {Observable} from "rxjs";
import {tap,catchError} from 'rxjs/operators';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { HttpErrorResponse, HttpParams } from "@angular/common/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@Injectable({
  providedIn: 'root'
})
export class GitserviceService {
  public username: any;
  public password: any;

  
  private url='https://api.github.com'


  constructor(private _http:HttpClient) { 
    console.log("http service constructor called");
  }
  
 

  
  public signinFunction(username,password): Observable<any> {
    let loginUrl=this.url+'/users/'+username;
    let options=new HttpHeaders({
      Authorization:"Basic "+btoa(username+':'+password)
    
    })
    
    return this._http.get(loginUrl,{headers:options})


  }
  public fetchrepos(username): Observable<any> {
    let fetchUrl=this._http.get(this.url+'/users/'+username+'/repos');
    console.log(fetchUrl)
    return fetchUrl;

  }
  
}