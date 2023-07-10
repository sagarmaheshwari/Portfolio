import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneIntroductionComponent } from './phone-introduction.component';

describe('PhoneIntroductionComponent', () => {
  let component: PhoneIntroductionComponent;
  let fixture: ComponentFixture<PhoneIntroductionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneIntroductionComponent]
    });
    fixture = TestBed.createComponent(PhoneIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
