import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { SharedModule } from '../shared/shared.module';
import { PagesModule } from './pages/pages.module';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    MobileComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PagesModule,
  ],
  exports: [
    MobileComponent,
    ContentComponent
  ]
})
export class HomeModule { }
