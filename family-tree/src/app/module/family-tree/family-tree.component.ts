import {Component,} from '@angular/core';
import {NavService, PageEnum} from "../../service/nav.service";
import {CsvService} from "../../csv.service";
@Component({
  selector: 'family-tree-component',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})
export class FamilyTreeComponent {
  constructor(private navService: NavService, private csvService : CsvService) {
    navService.currentPage = PageEnum.familyTree
  }
  searchTerm: string = '';
  activeTab = 1; // Tab đang được chọn, mặc định là Tab 1
  switchTab(tabNumber: number) {
    this.activeTab = tabNumber;
  }

  onSearch(): void {
    this.csvService.setSearchTerm(this.searchTerm);
    console.log('Từ khóa tìm kiếm:', this.searchTerm);
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.csvService.setSearchTerm('');
  }

  // showPlaceholderText = true;
  //
  // onSelectClick() {
  //   this.showPlaceholderText = false;
  // }
  isOpen: boolean = false;

  onSelectClick() {
    this.isOpen = !this.isOpen;
  }
}
