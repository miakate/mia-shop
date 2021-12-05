import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
},
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  { path: 'dashboard/products', loadChildren: () => import('./dashboard/products/products.module').then(m => m.ProductsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
