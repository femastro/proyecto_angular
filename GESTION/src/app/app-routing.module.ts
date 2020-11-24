import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './shared/components/container/container.component';
import { CheckLoginGuard } from './shared/guards/check-login.guards';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [ 
      {
        path : '',
        redirectTo : 'home',
        pathMatch : 'full'
      },
      { 
        path: 'home', 
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) 
      }, 
      { 
        path: 'stock', 
        loadChildren: () => import('./pages/stock/stock.module').then(m => m.StockModule), 
        canActivate: [CheckLoginGuard] 
      }, 
      { 
        path: 'login', 
        loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) 
      },
      { 
        path: 'admin', 
        loadChildren: () => import('./auth/admin/admin.module').then(m => m.AdminModule) 
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
