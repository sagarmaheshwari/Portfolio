import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePageTitleComponent } from './phone-page-title.component';

describe('PhonePageTitleComponent', () => {
  let component: PhonePageTitleComponent;
  let fixture: ComponentFixture<PhonePageTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhonePageTitleComponent]
    });
    fixture = TestBed.createComponent(PhonePageTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
