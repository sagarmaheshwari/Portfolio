import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './components/page-title/page-title.component';
import { PhonePageTitleComponent } from './components/phone-page-title/phone-page-title.component';

@NgModule({
  declarations: [
    PageTitleComponent,
    PhonePageTitleComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PageTitleComponent,
    PhonePageTitleComponent
  ]
})
export class SharedModule { }
