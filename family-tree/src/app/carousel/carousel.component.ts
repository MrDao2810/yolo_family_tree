import {Component, Input} from '@angular/core';

@Component({
  selector: 'carousel-component',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  @Input() imageUrl: string | undefined;
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() content: string = '';
  listCards: {
    imageUrl: string,
    title: string,
    date: string,
    content: string,
  }[] = [
    {
      imageUrl: 'assets/images/di_tich1.png',
      title: 'Khu di tích đền thờ Tướng quân Ngô Quang Bích',
      date: 'Thứ tư - 14/01/2015 09:10',
      content: 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho ...xem thêm',
    },
    {
      imageUrl: 'assets/images/di_tich2.png',
      title: 'Khu di tích đền thờ Tướng quân Ngô Quang Bích',
      date: 'Thứ tư - 14/01/2015 09:10',
      content: 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho ...xem thêm',
    },
    {
      imageUrl: 'assets/images/di_tich3.png',
      title: 'Khu di tích đền thờ Tướng quân Ngô Quang Bích',
      date: 'Thứ tư - 14/01/2015 09:10',
      content: 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho ...xem thêm'
    },
    {
      imageUrl: 'assets/images/di_tich1.png',
      title: 'Khu di tích đền thờ Tướng quân Ngô Quang Bích',
      date: 'Thứ tư - 14/01/2015 09:10',
      content: 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho ...xem thêm',
    },
    {
      imageUrl: 'assets/images/di_tich2.png',
      title: 'Khu di tích đền thờ Tướng quân Ngô Quang Bích',
      date: 'Thứ tư - 14/01/2015 09:10',
      content: 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho ...xem thêm',
    },
    {
      imageUrl: 'assets/images/di_tich3.png',
      title: 'Khu di tích đền thờ Tướng quân Ngô Quang Bích',
      date: 'Thứ tư - 14/01/2015 09:10',
      content: 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho ...xem thêm',
    }
  ];

  constructor() {
  }

}
