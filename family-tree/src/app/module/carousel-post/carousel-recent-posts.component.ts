import {Component, Input, VERSION} from '@angular/core';

@Component({
  selector: 'recent-posts-carousel',
  templateUrl: './carousel-recent-posts.component.html',
  styleUrls: ['./carousel-recent-posts.component.scss']
})
export class RecentPostsComponent {
  images = [
    {path: 'assets/images/di_tich_1.png'},
    {path: 'assets/images/di_tich_2.png'},
    {path: 'assets/images/di_tich_3.png'},
    {path: 'assets/images/di_tich_4.png'},
    // {path: 'assets/images/di_tich_1.png'},
    // {path: 'assets/images/di_tich_2.png'},
    // {path: 'assets/images/di_tich_3.png'},
    // {path: 'assets/images/di_tich_4.png'},
  ]
  name = 'Angular ' + VERSION.major;
  isEven(index: number): boolean {
    return index % 2 === 0;
  }
}
