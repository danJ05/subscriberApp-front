import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectifComponent } from './objectif.component';
import { ObjectifListComponent } from './objectif-list/objectif-list.component';
import { ObjectifNewComponent } from './objectif-new/objectif-new.component';
import { ObjectifRoutingModule } from './objectif-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ObjectifComponent,
    ObjectifListComponent,
    ObjectifNewComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ObjectifRoutingModule
  ],

  exports: [
    SharedModule,
    ObjectifRoutingModule
  ]
})
export class ObjectifModule { }
