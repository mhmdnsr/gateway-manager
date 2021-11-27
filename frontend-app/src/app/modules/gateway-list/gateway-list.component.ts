import { Component, OnInit } from '@angular/core';
import {GatewayService} from "../../shared/services/integration/gateway.service";
import {IGateway} from "../../shared/interfaces/gateway.interface";
import {DialogService} from "../../shared/services/custom-dialogs/dialog.service";
import {AddGatewayComponent} from "../../shared/components/add-gateway/add-gateway.component";

@Component({
  selector: 'app-gateway-list',
  templateUrl: './gateway-list.component.html',
  styleUrls: ['./gateway-list.component.scss']
})
export class GatewayListComponent implements OnInit {

  gateways: IGateway[] = [];

  constructor(private gatewayService: GatewayService, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.getAllGateways();
  }

  getAllGateways(){
    this.gatewayService.getAllGateways().then((gateways) => {
      this.gateways = gateways;
    }).catch(err => {
      console.log(err);
    });
  }

  addGateway() {
    this.dialogService.openDialog(AddGatewayComponent, 'gateway', {})
      .afterClosed().toPromise().then((gateway: IGateway | undefined) => {
      if(gateway){
        this.getAllGateways();
      }
    })
  }
}
