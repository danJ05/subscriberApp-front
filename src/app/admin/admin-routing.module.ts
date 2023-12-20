import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../authentification/login/login.component';
import { HomeAdminComponent } from '../admin/home-admin/home-admin.component';
import { ObjectifNewComponent } from './objectif-new/objectif-new.component';
import { ObjectifListComponent } from './objectif-list/objectif-list.component';
import { SouscriptionListComponent } from './souscription-list/souscription-list.component';
import { SouscriptionDetailComponent } from './souscription-detail/souscription-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuardGuard } from '../Guard/auth.guard';

const routes: Routes = [
  {path :'login', component:LoginComponent},
  { 
    path :'', component:HomeAdminComponent,
    canActivate:[authGuardGuard],
    children:
    [
      {path : '', redirectTo:'dashboard', pathMatch:'full'},
      {path : 'dashboard', component:DashboardComponent},
      { path :'objectif', component:ObjectifNewComponent},
      { path:'objectif-list',component:ObjectifListComponent},
      { path : 'souscription-list', component:SouscriptionListComponent},
      { path: 'souscription-detail/:id', component:SouscriptionDetailComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
