import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { LandingComponent } from './pages/landing/landing.component';
import { SignComponent } from './pages/sign/sign.component';


@NgModule({
  declarations: [
    LandingComponent,
    SignComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
