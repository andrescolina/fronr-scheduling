import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessGuard } from './shared/guards/access.guard';


const routes: Routes = [
  {
    path: 'invited',
    loadChildren: () => import('./invited/invited.module').then(m => m.InvitedModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('./modules/modules.module').then(m => m.ModulesModule),
    canLoad: [AccessGuard]
  },
  {
    path: '',
    redirectTo: 'invited/sign-in',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'invited/sign-in',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes , { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
