import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from '../shared/guards/access.guard';


const routes: Routes = [
  {
    path: 'profile',
    loadChildren: () => import('../modules/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: 'administration',
    loadChildren: () => import('../modules/administration/administration.module').then(m => m.AdministrationModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'profile'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'profile'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
