import {Component, VERSION, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'banner-home',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit() {
    const paddingCarousel = this.container.nativeElement.offsetHeight / 2;
    document.documentElement.style.setProperty('--padding-carousel', `${paddingCarousel}px`);
  }

  images = [
    {path: 'assets/images/image_banner/banner1.jpg'},
    {path: 'assets/images/image_banner/banner1.jpg'},
    {path: 'assets/images/image_banner/banner1.jpg'},
  ]
  name = 'Angular ' + VERSION.major;
}
