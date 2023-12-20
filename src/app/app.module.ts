import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { SouscriptionModule } from './souscription/souscription.module';
import { AdminModule } from './admin/admin.module';
import { JwtInterceptor } from './Interceptors/jwt.interceptor';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule, // required animations module
    NgbModule,

    AppRoutingModule,
    HttpClientModule,
    

    // Core and Share module 
    CoreModule,
    SharedModule,

    // Feature modules
    SouscriptionModule,
    AdminModule
    
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS , useClass:JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
