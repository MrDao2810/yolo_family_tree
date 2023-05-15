import {Component, VERSION,} from '@angular/core';

@Component({
  selector: 'test-home',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  content: string = 'Di tích lịch sử đền thờ Trạng nguyên ' +
    'Ngô Miễn Thiệu còn gọi là Nhà thờ các vị Đại khoa họ Ngô thuộc xóm Xanh, ' +
    'thôn Tam Sơn, phường Tam Sơn, thành phố Từ Sơn, tỉnh Bắc Ninh';
  additionalContent: string = 'Nội dung bổ sung';
  showMore: boolean = false;

  toggleContent() {
    this.showMore = !this.showMore;
  }

}
