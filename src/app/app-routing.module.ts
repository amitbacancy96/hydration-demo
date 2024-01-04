import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShowConstraintsComponent } from './show-constraints/show-constraints.component';
import { homeResolver } from './utilities/home.resolver';
import { CommonConfigsComponent } from './config.component';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent),
    resolve: { homeResolver }
  },
  {
    path: 'products',
    component: ProductsComponent,
  }, {
    path: 'constraints',
    component: ShowConstraintsComponent
  },{
    path: 'common-config',
    component: CommonConfigsComponent
  }, {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
