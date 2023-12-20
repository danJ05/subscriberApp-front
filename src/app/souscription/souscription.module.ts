import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { SouscriptionNewComponent } from './souscription-new/souscription-new.component';
import { SouscriptionRoutingModule } from './souscription-routing.module';



@NgModule({
  declarations: [
    SouscriptionNewComponent
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
