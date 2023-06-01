import {Component,} from '@angular/core';
import {NavService, NewsEnum, PageEnum} from "../../service/nav.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'news-component',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  type: string | null = null;

  posts = [
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post1.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post2.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post3.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post4.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post5.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post6.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post7.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    {
      title: 'Các họ đổi sang họ khác – Nguyên nhân và gốc tích',
      time: '13:13 12/02/2023',
      image: '../../../assets/images/news/posts/post8.png',
      content: 'Trong lịch sử tồn tại và phát triển, đặc biệt trong xã hội phong kiến, ' +
        'không ít dòng họ, chi họ Ngô đã đổi sang họ khác, ngược lại, một số họ khác đã đổi sang họ Ngô...'
    },
    // Thêm bài viết thứ 3
  ];

  constructor(
    public navService: NavService,
    private route: ActivatedRoute
  ) {
    navService.currentPage = PageEnum.news;
    navService.currentNews = NewsEnum.newsAll;
  }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    // alert(this.type);
  }

  get newsEnum() {
    return NewsEnum;
  }

  get currentTab(): string {
    let currentTab = '';
    switch (this.navService.currentNews) {
      case NewsEnum.newsAll:
        currentTab = 'Tất cả';
        break;
      case NewsEnum.historyFamily:
        currentTab = 'Lịch sử họ Kiều';
        break;
      case NewsEnum.celebrity:
        currentTab = 'Danh nhân họ Kiều';
        break;
      case NewsEnum.eventsAndCharacters:
        currentTab = 'Sự kiện và nhân vật';
        break;
      case NewsEnum.establishments:
        currentTab = 'Các cơ sở thờ tự họ Kiều';
        break;
      default:
        currentTab = '';
        break;
    }
    return currentTab;
  }
}
