import {Component, Input, OnInit} from '@angular/core';
import {IGateway} from "../../../../shared/interfaces/gateway.interface";

@Component({
  selector: 'app-gateway-list-card',
  templateUrl: './gateway-list-card.component.html',
  styleUrls: ['./gateway-list-card.component.scss']
})
export class GatewayListCardComponent implements OnInit {

  @Input() gateway?: IGateway;

  constructor() { }

  ngOnInit(): void {
  }
}
