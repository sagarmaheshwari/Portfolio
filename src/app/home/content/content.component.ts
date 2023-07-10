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

  innerWidth?: any;
  innerHeight?: any;

  constructor(
    private inViewService: InViewService
  ) {

    this.viewSub = inViewService.pageInView.subscribe( (val: string) => {
      this.inView = val;
    })

  }

  ngOnInit(): void {
    this.innerHeight = window.innerHeight;
    this.innerWidth = window.innerWidth;
    // console.log(this.innerWidth);
  }

  onClickScroll(elementId: string) {
    document.getElementById(elementId)?.scrollIntoView({behavior: "smooth"});
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    console.log(this.innerWidth);
  }

  isSuff() {
    return this.innerWidth>1200;
  }
}
