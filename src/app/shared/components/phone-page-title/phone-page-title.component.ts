import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { InViewService } from '../../services/in-view.service';

@Component({
  selector: 'app-phone-page-title',
  templateUrl: './phone-page-title.component.html',
  styleUrls: ['./phone-page-title.component.scss']
})
export class PhonePageTitleComponent {
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
