import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { JsonFormComponent } from '../components/json-form/json-form.component';




@NgModule({
  declarations: [
    HomeComponent,
    JsonFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
