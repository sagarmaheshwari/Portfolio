import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneAboutComponent } from './phone-about.component';

describe('PhoneAboutComponent', () => {
  let component: PhoneAboutComponent;
  let fixture: ComponentFixture<PhoneAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneAboutComponent]
    });
    fixture = TestBed.createComponent(PhoneAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
