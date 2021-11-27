import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomModalComponent} from './components/custom-modal/custom-modal.component';
import {AddGatewayComponent} from './components/add-gateway/add-gateway.component';
import {AddGatewayDeviceComponent} from './components/add-gateway-device/add-gateway-device.component';
import {MatIconModule} from "@angular/material/icon";
import {RouterModule} from "@angular/router";
import {ConfirmationDialogComponent} from './components/confirmation-dialog/confirmation-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {SnackBarComponent} from './components/snack-bar/snack-bar.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { DialogContainerComponent } from './components/dialog-container/dialog-container.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgxMaskModule} from "ngx-mask";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";


@NgModule({
  declarations: [
    CustomModalComponent,
    AddGatewayComponent,
    AddGatewayDeviceComponent,
    ConfirmationDialogComponent,
    SnackBarComponent,
    DialogContainerComponent
  ],
  exports: [
  ],
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class SharedModule {
}
