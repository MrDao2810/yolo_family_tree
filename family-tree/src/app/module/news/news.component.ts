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

  displayedPostsMain: NewsPost[] = [];

  displayedPostsSingle: NewsPost[] = [];

  currentPage: number = 1;

  constructor(
    public navService: NavService,
    private route: ActivatedRoute,
    public mockService: MockService
  ) {
    navService.currentPage = PageEnum.news;
    navService.currentNews = NewsEnum.newsAll;
    this.displayedPostsMain = mockService.newsPosts.slice(0, 5);
    this.displayedPostsSingle = mockService.newsPosts.slice(2,9)
  }

  prevTab() {
    const currentTabNumber = parseInt(this.currentTab);
    if (currentTabNumber > 1) {
      this.changeTab(currentTabNumber - 1);
    }
  }

  nextTab() {
    const currentTabNumber = parseInt(this.currentTab);
    if (currentTabNumber < 7) {
      this.changeTab(currentTabNumber + 1);
    }
  }

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

  changeTab(tab: number) {
    this.currentPage = tab;
    const totalTabs = Math.ceil(this.mockService.newsPosts.length / 5);

    if (totalTabs <= 5) {
      this.displayedPostsMain = this.mockService.newsPosts.slice((tab - 1) * 5, tab * 5);
    } else {
      if (tab <= 3) {
        this.displayedPostsMain = this.mockService.newsPosts.slice(0, 5);
      } else if (tab >= totalTabs - 1) {
        this.displayedPostsMain = this.mockService.newsPosts.slice(-5);
      } else {
        const startIndex = tab - 2;
        this.displayedPostsMain = this.mockService.newsPosts.slice(startIndex, startIndex + 5);
      }
    }
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
