import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  declarations: [
    MobileComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    MobileComponent,
    AboutComponent
  ]
})
export class HomeModule { }
