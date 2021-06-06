import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  emailRegExp = /^\s*\w{5,}@[a-z]+\.[a-z]+\s*$/i;
  @Input() value = '';
}
