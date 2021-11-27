import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayDetailsDeviceCardComponent } from './gateway-details-device-card.component';

describe('GatewayDetailsDeviceCardComponent', () => {
  let component: GatewayDetailsDeviceCardComponent;
  let fixture: ComponentFixture<GatewayDetailsDeviceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayDetailsDeviceCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayDetailsDeviceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
