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

  toggleContentIntroduce() {
    this.showMore = !this.showMore;
  }

  contentHistory: string = 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho Ngô Từ một cuộc đất tốt để xây dựng nơi thờ phụng tổ tiên.';
  addContent: string = 'Nội dung bổ sung ';
  show: boolean = false;

  toggleContentHistory() {
    this.show = !this.show;
  }

  contentHistory2: string = 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho Ngô Từ một cuộc đất tốt để xây dựng nơi thờ phụng tổ tiên.';
  addContent2: string = 'Nội dung bổ sung ';
  show2: boolean = false;

  toggleContentHistory2() {
    this.show2 = !this.show2;
  }

  addContentCaTru: string = 'Nội dung bổ sung ';
  showCaTru: boolean = false;

  toggleContentArtCaTru() {
    this.showCaTru = !this.showCaTru;
  }

  addContentVan: string = 'Nội dung bổ sung ';
  showVan: boolean = false;

  toggleContentArtVan() {
    this.showVan = !this.showVan;
  }

  addContentAll: string = 'Nội dung bổ sung ';
  showAll: boolean = false;

  toggleContentArtAll() {
    this.showAll = !this.showAll;
  }
}
