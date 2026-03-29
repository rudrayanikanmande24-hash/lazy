import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductRoutingModule } from '../product-routing.module';


@NgModule({
  declarations: [
    ProductDashboardComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule {
  constructor() {
    console.log('ProductModule loaded');
  }
 }
