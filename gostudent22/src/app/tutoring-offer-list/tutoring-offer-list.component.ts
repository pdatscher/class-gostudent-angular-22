import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Dates, Tutoringoffer} from "../shared/tutoringoffer";
import {GoStudentServiceService} from "../shared/go-student-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import { AuthenticationService } from "../shared/authentication.service";

@Component({
  selector: 'bs-tutoring-offer-list',
  templateUrl: './tutoring-offer-list.component.html',
  styles: [
  ]
})
export class TutoringOfferListComponent implements OnInit {


  offers: Tutoringoffer[] = [];

  @Output() showDetailsEvent = new EventEmitter<Tutoringoffer>();

  constructor(private gs: GoStudentServiceService, private router: Router, private route:ActivatedRoute, public authService: AuthenticationService) { }

  ngOnInit() : void {
    //ÜBER RXJS-DATENSTROM ITERIEREN -> SUBSCRIBE METHODE
  this.gs.getAll().subscribe(res => this.offers = res);
  console.log(this.offers);
  }

  showDetails(offer : Tutoringoffer) {
    console.log(offer);
    this.showDetailsEvent.emit(offer);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  offerSelected(offer: Tutoringoffer) {
    this.router.navigate(['../offers', offer.id], { relativeTo: this.route });
  }

}
