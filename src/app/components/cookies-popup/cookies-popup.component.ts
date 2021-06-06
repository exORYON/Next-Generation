import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-cookies-popup',
  templateUrl: './cookies-popup.component.html',
  styleUrls: ['./cookies-popup.component.css'],
  animations: [
    trigger('isShowing', [
      state('open', style({
        width: '411px',
        opacity: 1
      })),
      state('closed', style({
        width: '0px',
        opacity: 0
      })),
      transition('open => closed', [
        animate('0.5s ease')
      ])
    ])
  ]
})

export class CookiesPopupComponent implements OnInit {
  isOpen = true;
  
  ngOnInit() {
    setTimeout(() => {
      this.isOpen = !this.isOpen;
    }, 2000);
  }
}
