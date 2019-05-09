import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators'
import { New } from '../../dataBase/New';
import {NewsServiceHttpService} from '../../services/newsServiceHttp/news-service-http.service';

@Component({
  selector: 'app-new-search',
  templateUrl: './new-search.component.html',
  styleUrls: ['./new-search.component.css']
})
export class NewSearchComponent implements OnInit {

  news$: Observable<New[]>;
  private searchTerms = new Subject<string>();


  constructor(
    private newServiceHttp : NewsServiceHttpService
  ) { }

  search(term : string): void{
    this.searchTerms.next(term);
  }
  ngOnInit(): void {
    this.news$ = this.searchTerms.pipe(
      debounceTime(300),

      distinctUntilChanged(),
      switchMap( (term : string) =>
      this.newServiceHttp.searchNewByName(term)),
    );
  }

}
