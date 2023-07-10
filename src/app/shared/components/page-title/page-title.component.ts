import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { InViewService } from '../../services/in-view.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss']
})
export class PageTitleComponent implements OnInit {
  @Input() iconClass: string = "";
  @Input() title: string = "";

  private observer!: IntersectionObserver;

  @ViewChild('tile', { static: true })
  tile!: ElementRef;

  constructor (
    private inViewService: InViewService,
  ) { }

  ngOnInit() {
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.inViewService.changeView(this.title);
        }
      });
    });
    this.observer.observe(this.tile.nativeElement);
  }

}
