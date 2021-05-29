import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})

export class ContainerComponent {
  visible = true;
  itemsAreHidden:any;
  
  toggleItems() {
    this.visible = !this.visible;
  }
}
