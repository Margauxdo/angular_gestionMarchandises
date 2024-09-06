import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelbarrowFormComponent } from './wheelbarrow-form.component';

describe('WheelbarrowFormComponent', () => {
  let component: WheelbarrowFormComponent;
  let fixture: ComponentFixture<WheelbarrowFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WheelbarrowFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelbarrowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
