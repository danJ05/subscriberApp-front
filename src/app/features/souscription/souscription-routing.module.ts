import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SouscriptionNewComponent } from './souscription-new/souscription-new.component';
import { SouscriptionListComponent } from './souscription-list/souscription-list.component';
import { SouscriptionDetailComponent } from './souscription-detail/souscription-detail.component';
import { SouscriptionComponent } from './souscription.component';


const routes: Routes = [
  {
    path: '',
    component: SouscriptionComponent,
    children: [
      { path: 'new', component: SouscriptionNewComponent , data: { noAuthGuard: true } },
      { path: 'list', component: SouscriptionListComponent },
      { path: 'detail/:id', component: SouscriptionDetailComponent }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SouscriptionRoutingModule { }
