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
  content: string = 'Di tích lịch sử đền thờ Trạng nguyên ' +
    'Ngô Miễn Thiệu còn gọi là Nhà thờ các vị Đại khoa họ Ngô thuộc xóm Xanh, ' +
    'thôn Tam Sơn, phường Tam Sơn, thành phố Từ Sơn, tỉnh Bắc Ninh';
  additionalContent: string = 'Nội dung bổ sung ';
  showMore: boolean = false;

  toggleContent() {
    this.showMore = !this.showMore;
  }
}
