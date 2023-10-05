import {Component, Input, OnInit} from '@angular/core';
import {MockService, NewsPost} from "../../service/mock.service";
import {NavService, NewsEnum, PageEnum} from "../../service/nav.service";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {take} from "rxjs";

@Component({
  selector: 'category-news-component',
  templateUrl: './category-news.component.html',
  styleUrls: ['./category-news.component.scss']
})
export class CategoryNewsComponent implements OnInit{
  type: string | null = null;
  displayedPostsMain: NewsPost[] = [];
  displayedPostsSingle: NewsPost[] = [];
  currentPage: number = 1;
  selectedCategory: string = ''; // Biến này để lưu danh mục đang được chọn
  displayLimit: number = 10;
  constructor(
    public navService: NavService,
    private route: ActivatedRoute,
    public mockService: MockService,
    private router: Router
  ) {
    navService.currentPage = PageEnum.news;
    navService.currentNews = NewsEnum.newsAll;
    this.displayedPostsSingle = mockService.newsPosts.slice(2,8)
  }
  // filter posts
  // getPostByCategory(category: string): NewsPost[] {
  //   return this.newsPosts.filter(item => item.category === category);
  // }
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
    // Subscribe để lắng nghe sự thay đổi của selectedCategory
    this.mockService.selectedCategory$.subscribe(category => {
      this.selectedCategory = category;
      this.displayedPostsMain = category
        ? this.mockService.filterPostsByCategory(category).slice(0, this.displayLimit)
        : this.mockService.getNewsPosts().slice(0, this.displayLimit);
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Cuộn lên đầu trang khi router đã hoàn thành việc chuyển trang.
      }
    });
  }

  // Hàm chọn category
  selectCategory(category: string) {
    this.mockService.updateSelectedCategory(category);
  }
  get newsEnum() {
    return NewsEnum;
  }
  // changeTab(tab: number) {
  //   this.currentPage = tab.toString();
  //   const startIndex = (tab - 1) * 5;
  //   this.displayedPostsMain = this.mockService.newsPosts.slice(startIndex, startIndex + 5);
  // }
  //...
// Trong component.ts
  disabledTabs: boolean[] = [false, false, false, false, false]; // Khởi tạo mảng với tất cả các tab đều không bị tắt

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
