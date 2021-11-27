import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GatewayDetailsRoutingModule } from './gateway-details-routing.module';
import { GatewayDetailsComponent } from './gateway-details.component';
import { GatewayDetailsDeviceCardComponent } from './component/gateway-details-device-card/gateway-details-device-card.component';
import { GatewayDetailsTopHeaderComponent } from './component/gateway-details-top-header/gateway-details-top-header.component';
import {MatIconModule} from "@angular/material/icon";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";


@NgModule({
  declarations: [
    GatewayDetailsComponent,
    GatewayDetailsDeviceCardComponent,
    GatewayDetailsTopHeaderComponent
  ],
  imports: [
    CommonModule,
    GatewayDetailsRoutingModule,
    MatIconModule,
    MatSlideToggleModule
  ]
})
export class GatewayDetailsModule { }
