import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GatewayDetailsComponent} from "./gateway-details.component";

const routes: Routes = [
  {
    path: '', children: [
      {path: '', pathMatch: 'full', redirectTo: '/'},
      {path: ':id', component: GatewayDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayDetailsRoutingModule { }
