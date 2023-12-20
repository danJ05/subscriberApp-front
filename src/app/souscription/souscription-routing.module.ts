import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SouscriptionNewComponent } from './souscription-new/souscription-new.component';


const routes: Routes = [
  {path:'new', component:SouscriptionNewComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SouscriptionRoutingModule { }
