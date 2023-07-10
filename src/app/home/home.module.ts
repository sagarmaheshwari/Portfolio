import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ContentComponent } from './content/content.component';
import { PhonePagesModule } from './phone-pages/phone-pages.module';



@NgModule({
  declarations: [
    MobileComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesModule,
    PhonePagesModule
  ],
  exports: [
    MobileComponent,
    ContentComponent
  ]
})
export class HomeModule { }
