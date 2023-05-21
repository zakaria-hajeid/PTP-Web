import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IdentityService } from 'src/app/Shared/service/IdentityService/IdentityService';
import { PublicRoutingModule } from './public.routing.module';

@NgModule({
  imports: [
    PublicRoutingModule,
//todo:shard module that contain the common module to share it across all modules
HttpClientModule,
ReactiveFormsModule,
FormsModule,
  ]
})

export class PublicModule { }
