import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {IDevice} from "../../shared/interfaces/device.interface";

@Injectable({
  providedIn: 'root'
})
export class DeviceHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getAllDevicesByGatewayId(gatewayId: string): Promise<IDevice[]> {
    return this.httpClient.get<IDevice[]>(`${environment.apiURL}/device/${gatewayId}/all`).toPromise();
  }

  getDeviceByGatewayIdAndDeviceId(gatewayId: string, deviceId: string): Promise<IDevice> {
    return this.httpClient.get<IDevice>(`${environment.apiURL}/device/${gatewayId}/${deviceId}`).toPromise();
  }

  validateDeviceUID(gatewayId: string, uid: number): Promise<{result: boolean}> {
    return this.httpClient.post<{result: boolean}>(`${environment.apiURL}/device/verifyUID`,
      {uid: uid, gatewayId: gatewayId}).toPromise();
  }

  addDevice(device: {gatewayId: string, uid: number, vendor: string, status: boolean, createdAt: string}): Promise<IDevice>{
    return this.httpClient.post<IDevice>(`${environment.apiURL}/device/`, device).toPromise();
  }

  updateDeviceStatus(device: {gatewayId: string, deviceId: string, status: boolean}): Promise<IDevice>{
    return this.httpClient.put<IDevice>(`${environment.apiURL}/device/`, device).toPromise();
  }

  deleteDevice(gatewayId: string, deviceId: string): Promise<{status: boolean}>{
    return this.httpClient.delete<{status: boolean}>(`${environment.apiURL}/device/${gatewayId}/${deviceId}`).toPromise();
  }
}
