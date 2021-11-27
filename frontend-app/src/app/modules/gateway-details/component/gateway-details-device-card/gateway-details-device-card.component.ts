import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IDevice} from "../../../../shared/interfaces/device.interface";
import {DeviceService} from "../../../../shared/services/integration/device.service";
import {DialogService} from "../../../../shared/services/custom-dialogs/dialog.service";

@Component({
  selector: 'app-gateway-details-device-card',
  templateUrl: './gateway-details-device-card.component.html',
  styleUrls: ['./gateway-details-device-card.component.scss']
})
export class GatewayDetailsDeviceCardComponent implements OnInit {

  @Input() device?: IDevice;
  @Input() gatewayId?: string;
  @Output() onDeviceDelete: EventEmitter<any> = new EventEmitter<any>();

  constructor(private deviceService: DeviceService, private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  changeDeviceStatus() {
    if (this.device && this.gatewayId) {
      this.deviceService.updateDeviceStatus({
        deviceId: this.device._id,
        gatewayId: this.gatewayId,
        status: !this.device.status
      }).then((device) => {
        this.device = device;
      }).catch(() => {

      })
    }
  }

  deleteDevice() {
    if (this.device && this.gatewayId) {
      this.dialogService.openConfirmDialog(`Are you sure you want to delete ${this.device.vendor} (${this.device.uid})?`)
        .then(result => {
          if (result && this.device && this.gatewayId) {
            this.deviceService.deleteDevice(this.gatewayId, this.device._id).finally(() => {
              this.onDeviceDelete.emit();
            });
          }
        });
    }
  }
}
