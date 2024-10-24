import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyLogicComponent } from './loyaltylogic.component';

describe('LoyaltyLogicComponent', () => {
  let component: LoyaltyLogicComponent;
  let fixture: ComponentFixture<LoyaltyLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoyaltyLogicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoyaltyLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
