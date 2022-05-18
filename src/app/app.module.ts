import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { ServiceComponent } from './service/service.component';
import { ErrComponent } from './err/err.component';
import { LoanComponent } from './loan/loan.component';
import { HomeComponent } from './loan/home/home.component';
import { CarComponent } from './loan/car/car.component';
import { EduComponent } from './loan/edu/edu.component';
import { DatabindingComponent } from './databinding/databinding.component';
import {FormsModule} from  '@angular/forms';
import { DbcalComponent } from './dbcal/dbcal.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { Db1Component } from './db1/db1.component';
import { Db2Component } from './db2/db2.component';
import { Db3Component } from './db3/db3.component';
import { SeethaComponent } from './seetha/seetha.component';
import { RamaComponent } from './rama/rama.component';
import { RavanaComponent } from './ravana/ravana.component'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AComponent,
    BComponent,
    CComponent,
    DComponent,
    ServiceComponent,
    ErrComponent,
    LoanComponent,
    HomeComponent,
    CarComponent,
    EduComponent,
    DatabindingComponent,
    DbcalComponent,
    DirectivedemoComponent,
    PipedemoComponent,
    SqrPipe,
    Db1Component,
    Db2Component,
    Db3Component,
    SeethaComponent,
    RamaComponent,
    RavanaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
