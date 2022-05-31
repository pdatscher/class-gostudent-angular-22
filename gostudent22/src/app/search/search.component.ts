import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {debounceTime, distinctUntilChanged, filter, switchMap, tap} from "rxjs/operators";
import {GoStudentServiceService} from "../shared/go-student-service.service";
import {Tutoringoffer} from "../shared/tutoringoffer";


@Component({
  selector: 'bs-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  keyup = new EventEmitter<string>();
  foundOffers: Tutoringoffer[] = [];
  isLoading = false;
  @Output() offerSelected = new EventEmitter<Tutoringoffer>();

  constructor(private gs: GoStudentServiceService) { }

  ngOnInit(): void {
    this.keyup.pipe(filter(term => term != ""))
      .pipe(debounceTime(500))
      .pipe(distinctUntilChanged())
      .pipe(tap(() => this.isLoading = true))
      .pipe(switchMap(searchTerm => this.gs.searchSubject(searchTerm)))
      .pipe(tap(() => this.isLoading = false))
      .subscribe(offers => this.foundOffers = offers);
  }

}
