import {Component,} from '@angular/core';
import {NavService, PageEnum} from "../../service/nav.service";

@Component({
  selector: 'family-tree-component',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent {
  constructor(private navService: NavService) {
    navService.currentPage = PageEnum.familyTree
  }
}
