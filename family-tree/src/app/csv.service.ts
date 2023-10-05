import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CsvService {
  constructor(private http: HttpClient) {}

  getCsvData(): Observable<any> {
    return this.http.get('./assets/lifetime.csv', { responseType: 'text' });
  }
  private searchTermSource = new BehaviorSubject<string>('');
  currentSearchTerm = this.searchTermSource.asObservable();

  setSearchTerm(searchTerm: string) {
    this.searchTermSource.next(searchTerm);
  }
}
