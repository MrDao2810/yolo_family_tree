import {Component,} from '@angular/core';
import {NavService, PageEnum} from "../../service/nav.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public navService: NavService) {
    navService.currentPage = PageEnum.home;
  }

  get pageEnum() {
    return PageEnum;
  }
}
