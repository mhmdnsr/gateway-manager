import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewayListRoutingModule } from './gateway-list-routing.module';
import { GatewayListComponent } from './gateway-list.component';
import {SharedModule} from "../../shared/shared.module";
import { GatewayListTopHeaderComponent } from './component/gateway-list-top-header/gateway-list-top-header.component';
import { GatewayListCardComponent } from './component/gateway-list-card/gateway-list-card.component';
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    GatewayListComponent,
    GatewayListTopHeaderComponent,
    GatewayListCardComponent
  ],
    imports: [
        CommonModule,
        GatewayListRoutingModule,
        SharedModule,
        MatIconModule
    ]
})
export class GatewayListModule { }
