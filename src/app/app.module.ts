import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IdentityService } from './Shared/service/IdentityService/IdentityService';
import { signalRservices } from './Core/Srvices/SignalRservice';
import { ApiHelperService } from './Core/Srvices/ApiHelperService';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [signalRservices,IdentityService,ApiHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
