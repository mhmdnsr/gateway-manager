import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-gateway-list-top-header',
  templateUrl: './gateway-list-top-header.component.html',
  styleUrls: ['./gateway-list-top-header.component.scss']
})
export class GatewayListTopHeaderComponent implements OnInit {

  @Input() gateways: number = 0;
  @Output() onAddButtonClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.onAddButtonClick.emit();
  }

}
