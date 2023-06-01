import {Component, VERSION,} from '@angular/core';

@Component({
  selector: 'banner-home',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {

  images = [
    {path: 'assets/images/image_banner/banner1.jpg'},
    {path: 'assets/images/image_banner/banner1.jpg'},
    {path: 'assets/images/image_banner/banner1.jpg'},
  ]
  name = 'Angular ' + VERSION.major;
}
