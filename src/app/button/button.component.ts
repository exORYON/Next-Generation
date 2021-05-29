import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  constructor() {
    this.update = this.update.bind(this);
  }
  
  title = 'Default'

  update(value: string) {
    this.title = value;
  }
}
