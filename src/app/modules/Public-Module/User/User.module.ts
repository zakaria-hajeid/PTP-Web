import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiHelperService } from 'src/app/Core/Srvices/ApiHelperService';
import { signalRservices } from 'src/app/Core/Srvices/SignalRservice';
import { IdentityService } from 'src/app/Shared/service/IdentityService/IdentityService';
import { UserRoutingModule } from './User.routing';
import { UserLoginComponent } from './UserLogin/user-login/user-login.component';
import { UserRegesterComponent } from './UserRegester/user-regester/user-regester.component';

@NgModule({
  declarations:[UserLoginComponent
  ,UserRegesterComponent]
  ,
  imports: [
    UserRoutingModule,
HttpClientModule,
ReactiveFormsModule,
FormsModule,
  ]
  ,
  providers:[IdentityService,ApiHelperService,signalRservices]
})
export class PublicUserModule { }
