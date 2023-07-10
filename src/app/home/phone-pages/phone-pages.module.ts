import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneIntroductionComponent } from './phone-introduction/phone-introduction.component';
import { PhoneAboutComponent } from './phone-about/phone-about.component';
import { PhoneResumeComponent } from './phone-resume/phone-resume.component';
import { PhoneSkillsComponent } from './phone-skills/phone-skills.component';
import { PhoneContactComponent } from './phone-contact/phone-contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { PagesModule } from '../pages/pages.module';



@NgModule({
  declarations: [
    PhoneIntroductionComponent,
    PhoneAboutComponent,
    PhoneResumeComponent,
    PhoneSkillsComponent,
    PhoneContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    PhoneIntroductionComponent,
    PhoneAboutComponent,
    PhoneResumeComponent,
    PhoneSkillsComponent,
    PhoneContactComponent
  ]
})
export class PhonePagesModule { }
