import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const publicRoutes: Routes = [

  {
    path: '',
    loadChildren: () => import('./User/User.module').then(m => m.PublicUserModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(publicRoutes)],
  exports: [RouterModule]
})
export class PublicRoutingModule {
}
