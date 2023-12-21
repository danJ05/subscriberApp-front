import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { JwtInterceptor } from './core/Interceptors/jwt.interceptor';
import { BaseComponent } from './core/components/layout/base/base.component';
import { CoreModule } from './core/core.module';
import { SouscriptionModule } from './features/souscription/souscription.module';
import { ObjectifModule } from './features/objectif/objectif.module';
import { AuthentificationModule } from './features/authentification/authentification.module';
import { DashboardModule } from './features/dashboard/dashboard.module';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    NgbModule,

    AppRoutingModule,
    HttpClientModule,
    

    // Core and Share module 
    SharedModule,
    CoreModule,

    // Feature modules
    SouscriptionModule,
    ObjectifModule,
    AuthentificationModule,
    DashboardModule

    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass:JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
