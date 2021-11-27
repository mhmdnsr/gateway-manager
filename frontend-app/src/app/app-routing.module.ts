import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/gateway-list/gateway-list.module')
      .then(mod => mod.GatewayListModule),
  },
  {
    path: 'gateway',
    loadChildren: () => import('./modules/gateway-details/gateway-details.module')
      .then(mod => mod.GatewayDetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
