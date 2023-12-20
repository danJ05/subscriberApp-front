import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { LoginComponent } from '../authentification/login/login.component';
import { ObjectifListComponent } from './objectif-list/objectif-list.component';
import { ObjectifNewComponent } from './objectif-new/objectif-new.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { SouscriptionListComponent } from './souscription-list/souscription-list.component';
import { SouscriptionDetailComponent } from './souscription-detail/souscription-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeAdminComponent,
    LoginComponent,
    ObjectifListComponent,
    ObjectifNewComponent,
    SouscriptionListComponent,
    SouscriptionDetailComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    RouterModule
  ],
  exports:[
    AdminRoutingModule
  ]
})
export class AdminModule { }
