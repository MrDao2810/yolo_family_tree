import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentDetail, MockService, NewsPost} from "../../service/mock.service";
import {NavService, NewsEnum, PageEnum,} from "../../service/nav.service";

@Component({
  selector: 'detail-posts-component',
  templateUrl: './detail-posts.component.html',
  styleUrls: ['./detail-posts.component.scss']
})

export class DetailPostsComponent{
  post: NewsPost | undefined;
  displayedPostsSingle: NewsPost[] = [];
  tab1Posts:NewsPost[] = [];
  tab2Posts:NewsPost[] = [];
  listKeyWords: string[] = [
    'Abcccc',
    'Ipsum is simply',
    'Ipsum is simply',
    'Tfdb',
    'VnIndex',
    // Add more strings as needed
  ];
  currentTime: Date = new Date();
  constructor(
    private route: ActivatedRoute,
    private mockService: MockService,
    public tabService: NavService,
  ){
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = mockService.getPost(postId);
    this.displayedPostsSingle = mockService.newsPosts.slice(1,5);
    this.tab2Posts = mockService.newsPosts.slice(7,13);
    this.tab1Posts = mockService.newsPosts.slice(0,6);
  }
  transform(value: string): string {
    const parts = value.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    return `ngày ${day} tháng ${month} năm ${year}`;
  }
  activeTab = 1; // Tab đang được chọn, mặc định là Tab 1
  switchTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

}
