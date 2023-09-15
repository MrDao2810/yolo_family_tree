import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CommentDetail, MockService, NewsPost} from "../../service/mock.service";
import {NavService, NewsEnum, PageEnum} from "../../service/nav.service";

@Component({
  selector: 'detail-posts-component',
  templateUrl: './detail-posts.component.html',
  styleUrls: ['./detail-posts.component.scss']
})

export class DetailPostsComponent{
  post: NewsPost | undefined;
  displayedPostsSingle: NewsPost[] = [];
  listKeyWords: string[] = [
    'Abcccc',
    'Ipsum is simply',
    'Ipsum is simply',
    'Tfdb',
    'VnIndex',
    // Add more strings as needed
  ];
  constructor(
    private route: ActivatedRoute,
    private mockService: MockService,
    public navService: NavService,
  ){
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = mockService.getPost(postId);
    this.displayedPostsSingle = mockService.newsPosts.slice(1,5);
  }
  transform(value: string): string {
    const parts = value.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];

    return `ngày ${day} tháng ${month} năm ${year}`;
  }
  ngOnInit() {

  }
}
