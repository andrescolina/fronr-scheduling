import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvitedComponent } from './invited.component';
import { InvitedModule } from './invited.module';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: InvitedComponent,
    children: [
      {
        path: 'sign-in',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvitedRoutingModule { }
