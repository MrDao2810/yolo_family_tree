import {AfterViewInit, Component, ElementRef, Renderer2, VERSION} from '@angular/core';
import {NavService, PageEnum} from "../../service/nav.service";
import {MockService} from "../../service/mock.service";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'family-tree';
  name = 'Angular ' + VERSION.major;
  content: string = 'Di tích lịch sử đền thờ Trạng nguyên ' +
    'Ngô Miễn Thiệu còn gọi là Nhà thờ các vị Đại khoa họ Ngô thuộc xóm Xanh, ' +
    'thôn Tam Sơn, phường Tam Sơn, thành phố Từ Sơn, tỉnh Bắc Ninh';
  additionalContent: string = 'Nội dung bổ sung ';
  showMore: boolean = false;

  constructor(
    private navService: NavService,
    private dataService: MockService,
    private sanitizer: DomSanitizer
  ) {
    navService.currentPage = PageEnum.home;
  }


  toggleContentIntroduce() {
    this.showMore = !this.showMore;
  }

  contentHistory: string = 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho Ngô Từ một cuộc đất tốt để xây dựng nơi thờ phụng tổ tiên.';
  addContent: string = 'Nội dung bổ sung ';
  show: boolean = false;

  toggleContentHistory() {
    this.show = !this.show;
  }

  contentHistory2: string = 'Để trả ơn người đã cứu mình được toàn mạng, Hoàng Phúc chọn cho Ngô Từ một cuộc đất tốt để xây dựng nơi thờ phụng tổ tiên.';
  addContent2: string = 'Nội dung bổ sung ';
  show2: boolean = false;

  toggleContentHistory2() {
    this.show2 = !this.show2;
  }

  addContentCaTru: string = 'Nội dung bổ sung ';
  showCaTru: boolean = false;

  toggleContentArtCaTru() {
    this.showCaTru = !this.showCaTru;
  }

  addContentVan: string = 'Nội dung bổ sung ';
  showVan: boolean = false;

  toggleContentArtVan() {
    this.showVan = !this.showVan;
  }

  addContentAll: string = 'Nội dung bổ sung ';
  showAll: boolean = false;

  toggleContentArtAll() {
    this.showAll = !this.showAll;
  }
  playlists: any[] | undefined;
  listTest: SafeHtml | undefined;
  ngOnInit() {
    const iframeCode = '<iframe class="w-5/12 h-[100px]" src="https://www.youtube.com/embed/TTyDNCyoUeY" ' +
      'title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ' +
      'allowfullscreen> </iframe>';

    this.listTest = this.sanitizer.bypassSecurityTrustHtml(iframeCode);
  }
}
