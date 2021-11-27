import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayListTopHeaderComponent } from './gateway-list-top-header.component';

describe('GatewayListTopHeaderComponent', () => {
  let component: GatewayListTopHeaderComponent;
  let fixture: ComponentFixture<GatewayListTopHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayListTopHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayListTopHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
