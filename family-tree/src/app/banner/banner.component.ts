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
  show=true;
  data={
      note:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " +
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. " +
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
       note2:"Lorem ipsum"
  }
}
