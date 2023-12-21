import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './core/components/layout/base/base.component';
import { authGuardGuard } from './core/Guard/auth.guard';
import { HomeComponent } from './core/components/home/home.component';

const routes: Routes = [
  { path :'', component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path:'auth', loadChildren:() => import('./features/authentification/authentification.module').then(m => m.AuthentificationModule)
  },
  {
    path:'',
    component:BaseComponent,
    canActivate:[authGuardGuard],
    children:[
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path:'dashboard',
        loadChildren:() => import('./features/dashboard/dashboard.module').then(m =>m.DashboardModule)
      },
      {
        path:'objectif',
        loadChildren:() => import('./features/objectif/objectif.module').then(m =>m.ObjectifModule)
      },
      {
        path:'souscription',
        loadChildren:() => import('./features/souscription/souscription.module').then(m =>m.SouscriptionModule)
      },

    ]
  },
  { path :'**', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
