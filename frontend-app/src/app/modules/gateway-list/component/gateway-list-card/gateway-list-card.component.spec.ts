import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatewayListCardComponent } from './gateway-list-card.component';

describe('GatewayListCardComponent', () => {
  let component: GatewayListCardComponent;
  let fixture: ComponentFixture<GatewayListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatewayListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatewayListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
