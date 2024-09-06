import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelbarrowCardComponent } from './wheelbarrow-card.component';

describe('WheelbarrowCardComponent', () => {
  let component: WheelbarrowCardComponent;
  let fixture: ComponentFixture<WheelbarrowCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheelbarrowCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelbarrowCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
