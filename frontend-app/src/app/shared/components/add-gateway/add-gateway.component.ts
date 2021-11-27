import {Component, Inject, OnInit} from '@angular/core';
import {AbstractControl, FormControl, Validators} from "@angular/forms";
import {IGateway} from "../../interfaces/gateway.interface";
import {DialogService} from "../../services/custom-dialogs/dialog.service";
import {GatewayService} from "../../services/integration/gateway.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add-gateway',
  templateUrl: './add-gateway.component.html',
  styleUrls: ['./add-gateway.component.scss']
})
export class AddGatewayComponent implements OnInit {

  id?: string;
  gatewayName: FormControl = new FormControl('', Validators.compose([Validators.required]));
  gatewaySerialNumber: FormControl = new FormControl('', Validators.compose([Validators.required]));
  gatewayIPAddress: FormControl = new FormControl('', Validators.compose([Validators.required,
    Validators.pattern(/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/)]));
  validSerialNumber: boolean = false;

  constructor(private dialogService: DialogService, private gatewayService: GatewayService,
              @Inject(MAT_DIALOG_DATA) private gateway?: { id: string }) {
  }

  ngOnInit(): void {
    if (this.gateway) {
      this.id = this.gateway.id;
      if(this.id){
        this.getGatewayById(this.id);
      }
    }
  }

  getGatewayById(id: string) {
    this.gatewayService.getGatewayById(id).then((gateway) => {
      this.gatewayName.setValue(gateway.name);
      this.gatewaySerialNumber.setValue(gateway.serialNumber);
      this.gatewaySerialNumber.disable();
      this.gatewayIPAddress.setValue(gateway.ipAddress);
      this.validSerialNumber = true;
    }).catch(() => {
      this.closeDialog();
    });
  }

  addGateway() {
    if (this.gatewayName.valid && this.gatewaySerialNumber.disabled && this.gatewaySerialNumber.value && this.validSerialNumber && this.gatewayIPAddress.valid) {
      let gateway = {
        name: this.gatewayName.value,
        serialNumber: this.gatewaySerialNumber.value,
        ipAddress: this.gatewayIPAddress.value,
      };
      this.gatewayService.addGateway(gateway).then((newGateway) => {
        this.closeDialog(newGateway);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  editGateway() {
    if (this.id && this.gatewayName.valid && this.gatewaySerialNumber.disabled && this.validSerialNumber && this.gatewayIPAddress.valid) {
      let gateway = {
        id: this.id,
        name: this.gatewayName.value,
        serialNumber: this.gatewaySerialNumber.value,
        ipAddress: this.gatewayIPAddress.value,
      };
      this.gatewayService.editGateway(gateway).then((newGateway) => {
        this.closeDialog(newGateway);
      }).catch((err) => {
        console.log(err);
      });
    }
  }

  closeDialog(gateway?: IGateway) {
    this.dialogService.closeDialog('gateway', gateway);
  }

  getFormFieldError(fieldControl: AbstractControl | null): string | null {
    if (fieldControl?.touched) {
      if (fieldControl?.errors?.required)
        return 'Field Required';
    }
    return null;
  }

  validateSerialNumber() {
    if (this.gatewaySerialNumber.valid && !this.validSerialNumber) {
      this.gatewayService.validateSerialNumber(this.gatewaySerialNumber.value).then(({result}) => {
        if (result) {

        } else {
          this.validSerialNumber = true;
          this.gatewaySerialNumber.disable();
        }
      }).catch(err => {

      });
    }
  }
}
