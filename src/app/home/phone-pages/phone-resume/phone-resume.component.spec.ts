import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneResumeComponent } from './phone-resume.component';

describe('PhoneResumeComponent', () => {
  let component: PhoneResumeComponent;
  let fixture: ComponentFixture<PhoneResumeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneResumeComponent]
    });
    fixture = TestBed.createComponent(PhoneResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
