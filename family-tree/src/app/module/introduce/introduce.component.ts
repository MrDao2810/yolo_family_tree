import {Component,} from '@angular/core';
import {NavService, PageEnum} from "../../service/nav.service";

@Component({
  selector: 'introduce-component',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent {
  constructor(private navService: NavService) {
    navService.currentPage = PageEnum.about;
  }

  addContent: string = 'Nội dung bổ sung ';
  showMore: boolean = false;

  toggleContentHistory() {
    this.showMore = !this.showMore;
  }
}
