import { Injectable } from '@angular/core';
import {IDevice} from "../../interfaces/device.interface";
import {DeviceHttpService} from "../../../core/http/device-http.service";

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private deviceHttpService: DeviceHttpService) { }

  getAllDevicesByGatewayId(gatewayId: string): Promise<IDevice[]> {
    return this.deviceHttpService.getAllDevicesByGatewayId(gatewayId);
  }

  getDeviceByGatewayIdAndDeviceId(gatewayId: string, deviceId: string): Promise<IDevice> {
    return this.deviceHttpService.getDeviceByGatewayIdAndDeviceId(gatewayId, deviceId);
  }

  validateDeviceUID(gatewayId: string, uid: number): Promise<{result: boolean}> {
    return this.deviceHttpService.validateDeviceUID(gatewayId, uid);
  }

  addDevice(device: {gatewayId: string, uid: number, vendor: string, status: boolean, createdAt: string}): Promise<IDevice>{
    return this.deviceHttpService.addDevice(device);
  }

  updateDeviceStatus(device: {gatewayId: string, deviceId: string, status: boolean}): Promise<IDevice>{
    return this.deviceHttpService.updateDeviceStatus(device);
  }

  deleteDevice(gatewayId: string, deviceId: string): Promise<{status: boolean}>{
    return this.deviceHttpService.deleteDevice(gatewayId, deviceId);
  }
}
