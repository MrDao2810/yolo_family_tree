import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  currentPage: PageEnum = PageEnum.home;
  currentNews: NewsEnum = NewsEnum.newsAll;
  constructor() { }
}

export enum NewsEnum {
  newsAll,
  historyFamily,
  celebrity,
  eventsAndCharacters,
  establishments
}

export enum PageEnum {
  home,
  about,
  familyTree,
  news,
  contact,
}
