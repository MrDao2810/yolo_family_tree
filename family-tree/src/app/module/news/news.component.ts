import {Component,} from '@angular/core';
import {NavService, NewsEnum, PageEnum} from "../../service/nav.service";
import {ActivatedRoute} from "@angular/router";
import {MockService, NewsPost} from "../../service/mock.service";

@Component({
  selector: 'news-component',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  type: string | null = null;

  currentPage: number = 1;

  constructor(
    public navService: NavService,
    private route: ActivatedRoute,
    public mockService: MockService
  ) {
    navService.currentNews = NewsEnum.newsAll;
  }
  // filter posts

  // getPostByCategory(category: string): NewsPost[] {
  //   return this.newsPosts.filter(item => item.category === category);
  // }

  ngOnInit(): void {
    this.type = this.route.snapshot.paramMap.get('type');
    // alert(this.type);
  }

  get newsEnum() {
    return NewsEnum;
  }

  // changeTab(tab: number) {
  //   this.currentPage = tab.toString();
  //   const startIndex = (tab - 1) * 5;
  //   this.displayedPostsMain = this.mockService.newsPosts.slice(startIndex, startIndex + 5);
  // }


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
