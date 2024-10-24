import { ComponentFixture, TestBed } from '@angular/core/testing';

import { customerdetailsComponent } from './customerdetails.component';

describe('customerdetailsComponent', () => {
  let component: customerdetailsComponent;
  let fixture: ComponentFixture<customerdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [customerdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(customerdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
