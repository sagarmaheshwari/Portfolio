import { ViewportScroller } from '@angular/common';
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { InViewService } from 'src/app/shared/services/in-view.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  inView: string = 'introduction';
  viewSub: any;

  constructor(
    private inViewService: InViewService
  ) {

    this.viewSub = inViewService.pageInView.subscribe( (val: string) => {
      this.inView = val;
      console.log(val);
    })

  }

  ngOnInit(): void {
  }

  onClickScroll(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({behavior: "smooth"});
  }
}
