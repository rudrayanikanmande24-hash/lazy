import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { ProductDashboardComponent } from './product/product-dashboard/product-dashboard.component';
import { UsersDashboardComponent } from './users/users-dashboard/users-dashboard.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },{
    path:'',
    component: HomeComponent
  },{
    path:'product',
    // component: ProductDashboardComponent
    loadChildren: () => import('./product/product.module').then(m=>m.ProductModule)
  },{
    path:'users',
    // component: UsersDashboardComponent
    loadChildren: () => import('./users/users.module').then(m=>m.UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
