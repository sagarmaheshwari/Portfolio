import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';
import { ResumeComponent } from './resume/resume.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    AboutComponent,
    ResumeComponent,
    SkillsComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IntroductionComponent,
    AboutComponent,
    ResumeComponent,
    SkillsComponent,
    ContactComponent
  ]
})
export class PagesModule { }
