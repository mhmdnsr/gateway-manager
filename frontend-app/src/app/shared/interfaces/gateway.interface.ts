import {IDevice} from "./device.interface";

export interface IGateway {
  _id: string;
  name: string;
  serialNumber: string;
  ipAddress: string;
  devices: IDevice[]
}
