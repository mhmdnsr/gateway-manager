import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayDetailsTopHeaderComponent } from './gateway-details-top-header.component';

describe('GatewayDetailsTopHeaderComponent', () => {
  let component: GatewayDetailsTopHeaderComponent;
  let fixture: ComponentFixture<GatewayDetailsTopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayDetailsTopHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayDetailsTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
