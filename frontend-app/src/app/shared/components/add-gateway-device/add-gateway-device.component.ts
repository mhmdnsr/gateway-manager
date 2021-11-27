import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, Validators} from "@angular/forms";
import {DialogService} from "../../services/custom-dialogs/dialog.service";
import {GatewayService} from "../../services/integration/gateway.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IGateway} from "../../interfaces/gateway.interface";
import {DeviceService} from "../../services/integration/device.service";
import {IDevice} from "../../interfaces/device.interface";

@Component({
  selector: 'app-add-gateway-device',
  templateUrl: './add-gateway-device.component.html',
  styleUrls: ['./add-gateway-device.component.scss']
})
export class AddGatewayDeviceComponent implements OnInit {

  gatewayId?: string;
  deviceVendor: FormControl = new FormControl('', Validators.compose([Validators.required]));
  deviceUID: FormControl = new FormControl('', Validators.compose([Validators.required,
    Validators.pattern(/^[0-9]*$/)]));
  deviceCreatedAt: FormControl = new FormControl('', Validators.compose([Validators.required]));
  deviceStatus: FormControl = new FormControl(false, Validators.compose([Validators.required]));
  validUID: boolean = false;

  constructor(private dialogService: DialogService, private deviceService: DeviceService,
              @Inject(MAT_DIALOG_DATA) private gateway?: { id: string }) {
  }

  ngOnInit(): void {
    if (this.gateway?.id) {
      this.gatewayId = this.gateway.id;
    } else {
      this.closeDialog();
    }
  }

  addDevice() {
    if (this.gatewayId && this.deviceVendor.valid && this.deviceUID.disabled && this.deviceUID.value && this.validUID && this.deviceCreatedAt.valid && this.deviceStatus.valid) {
      let createdAt = new Date(this.deviceCreatedAt.value);
      let device = {
        gatewayId: this.gatewayId,
        uid: this.deviceUID.value,
        vendor: this.deviceVendor.value,
        status: this.deviceStatus.value,
        createdAt: createdAt.toISOString()
      };
      this.deviceService.addDevice(device).then((device) => {
        this.closeDialog(device);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  closeDialog(device?: IDevice) {
    this.dialogService.closeDialog('device', device);
  }

  getFormFieldError(fieldControl: AbstractControl | null): string | null {
    if (fieldControl?.touched) {
      if (fieldControl?.errors?.required)
        return 'Field Required';
    }
    return null;
  }

  validateUID() {
    if (this.gatewayId && this.deviceUID.valid && !this.validUID) {
      this.deviceService.validateDeviceUID(this.gatewayId, this.deviceUID.value).then(({result}) => {
        if (result) {

        } else {
          this.validUID = true;
          this.deviceUID.disable();
        }
      }).catch(err => {

      });
    }
  }

}
