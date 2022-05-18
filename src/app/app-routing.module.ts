import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { registerLocaleData } from '@angular/common';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { CComponent } from './c/c.component';
import { DComponent } from './d/d.component';
import { ServiceComponent } from './service/service.component';
import { ErrComponent } from './err/err.component';
import { LoanComponent } from './loan/loan.component';
import { CarComponent } from './loan/car/car.component';
import { EduComponent } from './loan/edu/edu.component';
import { HomeComponent } from './loan/home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';

const routes: Routes = [
  {
    path:'reg',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'a',
    component:AComponent
  },
  {
    path:'b',
    component:BComponent
  },
  {
    path:'c',
    component:CComponent
  },
  {
    path:'d',
    component:DComponent
  },
  {
    path:'db',
    component:DatabindingComponent
  },
  {
    path:'loan',
    component:LoanComponent,
    children: [
      {
        path:'car',
        component:CarComponent
      },
      {
        path:'edu',
        component:EduComponent
      },
      {
        path:'home',
        component:HomeComponent
      }
    ]
     
    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
