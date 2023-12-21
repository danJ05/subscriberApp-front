import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  NavComponent } from '../core/components/nav/nav.component';
import { RouterModule } from '@angular/router';
import { PrimengModule } from './primeng.module';
import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    PrimengModule,
    ToastrModule.forRoot(),
    
  ],
  exports:[
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NavComponent,
    PrimengModule
  ]
})
export class SharedModule { }
