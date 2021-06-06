import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  color = '';
  cardColor = '';
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        const routeParams = this.route.snapshot.paramMap;
        this.color = routeParams.get('color') ?? 'grey';
        this.cardColor = this.color !== 'grey' ? `var(--${this.color})` : `var(--light-grey)`;
      }
    });
  }
}