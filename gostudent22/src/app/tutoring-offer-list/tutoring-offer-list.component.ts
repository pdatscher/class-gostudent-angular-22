import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Dates, Tutoringoffer} from "../shared/tutoringoffer";
import {GoStudentServiceService} from "../shared/go-student-service.service";

@Component({
  selector: 'bs-tutoring-offer-list',
  templateUrl: './tutoring-offer-list.component.html',
  styles: [
  ]
})
export class TutoringOfferListComponent implements OnInit {

  offers: Tutoringoffer[] = [];

  @Output() showDetailsEvent = new EventEmitter<Tutoringoffer>();

  constructor(private gs: GoStudentServiceService) { }

  ngOnInit() : void {
  this.offers = this.gs.getAll();
  console.log(this.offers);
  }

  showDetails(offer : Tutoringoffer) {
    console.log(offer);
    this.showDetailsEvent.emit(offer);
  }

}
