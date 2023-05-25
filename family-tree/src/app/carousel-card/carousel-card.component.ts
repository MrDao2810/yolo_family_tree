import {Component, Input} from '@angular/core';

@Component({
  selector: 'carousel-card-component',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss']
})
export class CarouselCardComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() content: string = '';

  constructor() {
  }
}
