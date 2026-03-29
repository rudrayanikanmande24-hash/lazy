import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UserRoutingModule } from '../user/user-routing.module';



@NgModule({
  declarations: [
    UsersDashboardComponent,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UsersModule {
  constructor() {
    console.log('UsersModule loaded');
  }
}
