import {Component, OnInit} from '@angular/core';
import {GatewayService} from "../../shared/services/integration/gateway.service";
import {DeviceService} from "../../shared/services/integration/device.service";
import {IGateway} from "../../shared/interfaces/gateway.interface";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {DialogService} from "../../shared/services/custom-dialogs/dialog.service";
import {AddGatewayComponent} from "../../shared/components/add-gateway/add-gateway.component";
import {AddGatewayDeviceComponent} from "../../shared/components/add-gateway-device/add-gateway-device.component";
import {IDevice} from "../../shared/interfaces/device.interface";

@Component({
  selector: 'app-gateway-details',
  templateUrl: './gateway-details.component.html',
  styleUrls: ['./gateway-details.component.scss']
})
export class GatewayDetailsComponent implements OnInit {

  gateway?: IGateway;

  constructor(private gatewayService: GatewayService, private deviceService: DeviceService, private router: Router,
              private route: ActivatedRoute, private dialogService: DialogService) {
  }

  ngOnInit(): void {
    let gatewayId = this.route.snapshot.params.id;
    if (gatewayId) {
      this.getGatewayById(gatewayId);
    } else {
      this.router.navigate(['/']);
    }
  }

  getGatewayById(id: string) {
    this.gatewayService.getGatewayById(id).then((gateway) => {
      this.gateway = gateway;
    }).catch(() => {
      this.router.navigate(['/']);
    });
  }

  addDevice() {
    if (this.gateway) {
      this.dialogService.openDialog(AddGatewayDeviceComponent, 'device', {id: this.gateway._id})
        .afterClosed().toPromise().then((device: IDevice | undefined) => {
        if (device && this.gateway) {
          this.getGatewayById(this.gateway._id);
        }
      })
    }
  }

  deleteGateway() {
    if (this.gateway) {
      this.dialogService.openConfirmDialog(`Are you sure you want to delete ${this.gateway.name}?`).then(result => {
        if (result && this.gateway) {
          this.gatewayService.deleteGateway(this.gateway._id).then(({status}) => {
            if (result) {
              this.router.navigate(['/']);
            } else {

            }
          }).catch((err) => {

          });
        }
      });
    }
  }

  editGateway() {
    if (this.gateway) {
      this.dialogService.openDialog(AddGatewayComponent, 'gateway', {id: this.gateway._id})
        .afterClosed().toPromise().then((gateway: IGateway | undefined) => {
        if (gateway) {
          this.gateway = gateway;
        }
      })
    }
  }

  onDeviceDelete() {
    if (this.gateway) {
      this.getGatewayById(this.gateway._id);
    }
  }
}
