import { Injectable } from '@angular/core';
import {GatewayHttpService} from "../../../core/http/gateway-http.service";
import {IGateway} from "../../interfaces/gateway.interface";

@Injectable({
  providedIn: 'root'
})
export class GatewayService {

  constructor(private gatewayHttpService: GatewayHttpService) { }

  getAllGateways(): Promise<IGateway[]>{
    return this.gatewayHttpService.getAllGateways();
  }

  getGatewayById(id: string): Promise<IGateway>{
    return this.gatewayHttpService.getGatewayById(id);
  }

  validateSerialNumber(serialNumber: string): Promise<{result: boolean}> {
    return this.gatewayHttpService.validateSerialNumber(serialNumber);
  }

  addGateway(gateway: {name: string, serialNumber: string, ipAddress: string}): Promise<IGateway>{
    return this.gatewayHttpService.addGateway(gateway);
  }

  editGateway(gateway: {id: string, name: string, serialNumber: string, ipAddress: string}): Promise<IGateway>{
    return this.gatewayHttpService.editGateway(gateway);
  }

  deleteGateway(id: string): Promise<{status: boolean}>{
    return this.gatewayHttpService.deleteGateway(id);
  }
}
