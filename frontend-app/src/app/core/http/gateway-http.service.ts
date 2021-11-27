import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IGateway} from "../../shared/interfaces/gateway.interface";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class GatewayHttpService {

  constructor(private httpClient: HttpClient) {
  }

  getAllGateways(): Promise<IGateway[]> {
    return this.httpClient.get<IGateway[]>(`${environment.apiURL}/gateway/all`).toPromise();
  }

  getGatewayById(id: string): Promise<IGateway> {
    return this.httpClient.get<IGateway>(`${environment.apiURL}/gateway/${id}`).toPromise();
  }

  validateSerialNumber(serialNumber: string): Promise<{result: boolean}> {
    return this.httpClient.post<{result: boolean}>(`${environment.apiURL}/gateway/verifySerialNumber`,
      {serialNumber: serialNumber}).toPromise();
  }

  addGateway(gateway: {name: string, serialNumber: string, ipAddress: string}): Promise<IGateway>{
    return this.httpClient.post<IGateway>(`${environment.apiURL}/gateway/`, gateway).toPromise();
  }

  editGateway(gateway: {id: string, name: string, serialNumber: string, ipAddress: string}): Promise<IGateway>{
    return this.httpClient.put<IGateway>(`${environment.apiURL}/gateway/`, gateway).toPromise();
  }

  deleteGateway(id: string): Promise<{status: boolean}>{
    return this.httpClient.delete<{status: boolean}>(`${environment.apiURL}/gateway/${id}`).toPromise();
  }
}
