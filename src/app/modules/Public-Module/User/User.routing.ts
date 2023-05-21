import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './UserLogin/user-login/user-login.component';
import { UserRegesterComponent } from './UserRegester/user-regester/user-regester.component';

const publicRoutes: Routes = [

  {
    path: '',
    component: UserRegesterComponent

  },
  {
    path: 'login',
    component: UserLoginComponent
  }
  ,
  {
    path: 'Register',
    component: UserRegesterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
