import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {GatewayListComponent} from "./gateway-list.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', component: GatewayListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GatewayListRoutingModule {
}
