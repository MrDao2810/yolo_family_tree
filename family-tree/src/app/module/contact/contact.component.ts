import {Component,} from '@angular/core';
import {NavService, PageEnum} from "../../service/nav.service";

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  value = '';
  onEnter(value: string) { this.value = value; }

  constructor(private navService: NavService) {
    navService.currentPage = PageEnum.contact;
  }
}
