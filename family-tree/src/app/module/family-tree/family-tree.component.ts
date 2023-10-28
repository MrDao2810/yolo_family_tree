import {Component,} from '@angular/core';
import {NavService, PageEnum} from "../../service/nav.service";
import {CsvService} from "../../csv.service";
import {MockService} from "../../service/mock.service";
@Component({
  selector: 'family-tree-component',
  templateUrl: './family-tree.component.html',
  styleUrls: ['./family-tree.component.scss']
})

export class FamilyTreeComponent {
  searchTerm: string = '';
  activeTab = 1; // Tab đang được chọn, mặc định là Tab 1
  listHoly: any[] = [];
  nodes!: any[];
  selectedNodes: any;

  constructor(
    private navService: NavService,
    private csvService : CsvService,) {
    navService.currentPage = PageEnum.familyTree;
  }
  selected = 'Đời';
  options = [
    { value: 'genealogy1', label: 'Đời 1',},
    { value: 'genealogy2', label: 'Đời 2',},
    { value: 'genealogy3', label: 'Đời 3',}
  ];
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
  isOpen: boolean = false;
  onSelectClick() {
    this.isOpen = !this.isOpen;
  }
}
