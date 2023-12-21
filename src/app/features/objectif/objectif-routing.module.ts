import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObjectifComponent } from './objectif.component';
import { ObjectifNewComponent } from './objectif-new/objectif-new.component';
import { ObjectifListComponent } from './objectif-list/objectif-list.component';


const routes: Routes = [
  {
    path:'',
    component:ObjectifComponent,
    children:[
        {path:'new',component:ObjectifNewComponent},
        {path:'list', component:ObjectifListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectifRoutingModule { }
