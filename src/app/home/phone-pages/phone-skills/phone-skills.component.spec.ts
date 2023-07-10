import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneSkillsComponent } from './phone-skills.component';

describe('PhoneSkillsComponent', () => {
  let component: PhoneSkillsComponent;
  let fixture: ComponentFixture<PhoneSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneSkillsComponent]
    });
    fixture = TestBed.createComponent(PhoneSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
