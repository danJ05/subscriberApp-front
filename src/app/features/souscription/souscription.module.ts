import { NgModule } from '@angular/core';

import { SouscriptionNewComponent } from './souscription-new/souscription-new.component';
import { SouscriptionRoutingModule } from './souscription-routing.module';
import { SouscriptionComponent } from './souscription.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SouscriptionDetailComponent } from './souscription-detail/souscription-detail.component';
import { SouscriptionListComponent } from './souscription-list/souscription-list.component';



@NgModule({
  declarations: [
    SouscriptionNewComponent,
    SouscriptionComponent,
    SouscriptionDetailComponent,
    SouscriptionListComponent
  ],
  imports: [
    SharedModule,
    SouscriptionRoutingModule
  ],
  exports:[
    SouscriptionRoutingModule,
    SharedModule
  ]
})
export class SouscriptionModule { }
