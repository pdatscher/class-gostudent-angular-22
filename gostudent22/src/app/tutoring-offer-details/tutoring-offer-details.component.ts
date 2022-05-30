import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Tutoringoffer} from "../shared/tutoringoffer";

@Component({
  selector: 'bs-tutoring-offer-details',
  templateUrl: './tutoring-offer-details.component.html',
  styles: [
  ]
})
export class TutoringOfferDetailsComponent implements OnInit {
  @Input() offer: Tutoringoffer | undefined;
  @Output() showListEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  showOfferList(){
    this.showListEvent.emit();
  }

}
