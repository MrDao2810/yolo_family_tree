import { Component, OnInit } from '@angular/core';
import { CsvService } from '../csv.service';

@Component({
  selector: 'app-table-view',
  templateUrl: 'table-view.component.html',
  styleUrls: ['table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  csvData: any[] = [];
  headers: string[] = []; // Thêm mảng headers
  searchTerm: string = '';
  constructor(private csvService: CsvService,) {}

  ngOnInit(): void {
    this.csvService.getCsvData().subscribe(
      (data: string) => {
        this.csvData = this.parseCsvData(data);
      },
      (error) => {
      }
    );
    this.csvService.currentSearchTerm.subscribe(searchTerm => {
      this.searchTerm = searchTerm;
    });
  }
  parseCsvData(csvData: string): any[] {
    const rows = csvData.trim().split('\n');
    this.headers = rows[0].split(',').map(item => item.trim().toLowerCase());
    rows.splice(0, 1); // Loại bỏ hàng đầu tiên

    const data = [];
    for (const row of rows) {
      const columns = row.split(',');
      const rowData = {} as {[key: string]: string};
      if (columns.length !== this.headers.length) {
        continue;
      }
      for (let i = 0; i < this.headers.length; i++) {
        rowData[this.headers[i].trim()] = columns[i].trim();
      }
      data.push(rowData);
    }
    return data;
  }
  get filteredData() {
    if (!this.searchTerm) return this.csvData;
    return this.csvData.filter(item => {
      const values = Object.values(item).join('').toLowerCase();
      return values.includes(this.searchTerm.toLowerCase());
    });
  }
  getColumnWidth(header: string): number {
    switch (header) {
      case 'stt':
        return 50;
      case 'mã':
        return 100;
      case 'mối quan hệ':
        return 250;
      case 'tên thánh':
        return 130;
      case 'họ & tên':
        return 250;
      case 'ngày sinh':
        return 150;
      case 'năm sinh':
        return 100;
      case 'ngày mất':
        return 150;
      case 'năm mất':
        return 100;
      case 'hưởng thọ':
        return 100;
      case 'giới tính':
        return 100;
      case 'quê quán':
        return 200;
      case 'nơi ở':
        return 200;
      default:
        return 300;
    }
  }
}
