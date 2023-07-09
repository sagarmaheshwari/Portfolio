import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntroductionComponent } from './introduction/introduction.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    IntroductionComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    IntroductionComponent,
    AboutComponent
  ]
})
export class PagesModule { }
