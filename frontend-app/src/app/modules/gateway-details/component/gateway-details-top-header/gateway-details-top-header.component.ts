import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IGateway} from "../../../../shared/interfaces/gateway.interface";

@Component({
  selector: 'app-gateway-details-top-header',
  templateUrl: './gateway-details-top-header.component.html',
  styleUrls: ['./gateway-details-top-header.component.scss']
})
export class GatewayDetailsTopHeaderComponent implements OnInit {

  @Input() gateway?: IGateway;
  @Output() onAddDevice: EventEmitter<any> = new EventEmitter<any>();
  @Output() onEditGateway: EventEmitter<any> = new EventEmitter<any>();
  @Output() onDeleteGateway: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  addDevice(){
    this.onAddDevice.emit();
  }

  editGateway(){
    this.onEditGateway.emit();
  }

  deleteGateway(){
    this.onDeleteGateway.emit();
  }

}
