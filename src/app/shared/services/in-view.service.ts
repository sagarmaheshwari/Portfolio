import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InViewService {

  pageInView: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  changeView(val: string) {
    this.pageInView.next(val.toLowerCase());
  }

}
