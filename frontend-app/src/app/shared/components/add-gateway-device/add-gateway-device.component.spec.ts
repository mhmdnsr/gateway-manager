import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGatewayDeviceComponent } from './add-gateway-device.component';

describe('AddGatewayDeviceComponent', () => {
  let component: AddGatewayDeviceComponent;
  let fixture: ComponentFixture<AddGatewayDeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGatewayDeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGatewayDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
