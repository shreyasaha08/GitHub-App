import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProfileModule} from './profile/profile.module';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent} from './profile/login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { GitserviceService } from './gitservice.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserModule } from './user/user.module';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    HttpClientModule,
    FormsModule,
    UserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
      
    ])
    

  ],
  providers: [GitserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
