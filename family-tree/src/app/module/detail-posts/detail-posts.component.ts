import {Component, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MockService, NewsPost} from "../../service/mock.service";
import {NavService, NewsEnum, PageEnum} from "../../service/nav.service";

@Component({
  selector: 'detail-posts-component',
  templateUrl: './detail-posts.component.html',
  styleUrls: ['./detail-posts.component.scss']
})
export class DetailPostsComponent {
  post: NewsPost | undefined;
  displayedPostsSingle: NewsPost[] = [];
  constructor(
    private route: ActivatedRoute,
    private mockService: MockService,
    public navService: NavService,
  ){
    const postId = this.route.snapshot.paramMap.get('id');
    this.post = mockService.getPost(postId);
    this.displayedPostsSingle = mockService.newsPosts.slice(1,5)
  }

  ngOnInit() {

  }
}
