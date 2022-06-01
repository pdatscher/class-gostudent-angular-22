import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Dates, Tutoringoffer} from "../shared/tutoringoffer";
import {GoStudentServiceService} from "../shared/go-student-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {OfferFactory} from "../shared/offer-factory";
import {BookedTutoring} from "../shared/booked-tutoring";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-tutoring-offer-details',
  templateUrl: './tutoring-offer-details.component.html',
  styles: []
})
export class TutoringOfferDetailsComponent implements OnInit {
  //@Input() offer: Tutoringoffer | undefined;
  //@Output() showListEvent = new EventEmitter<any>();
  //WIRD NICHT MEHR BENÖTIGT DA INITIAL LEERES BUCH ANGELEGT WIRD

  offer: Tutoringoffer = OfferFactory.empty();

  constructor(
    private gs: GoStudentServiceService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService
  ) {
  }

  ngOnInit(): void {
    this.loadOffer()
  }


  private loadOffer() {
    const params = this.route.snapshot.params;
    this.gs.getSingle(params['id']).subscribe(o => this.offer = o);
  }

  //NICHT MEHR BENÖTIGT
  /*showOfferList(){
    this.showListEvent.emit();
  }*/

  bookableDates() {
    return this.offer?.dates?.filter(d => !d.user_id ||this.isBookedByMe(d)) || []
  }


  isBookedByMe(date: Dates) {
    return date.user_id === this.authService.getCurrentUserId()
  }

  removeOffer() {
    if (confirm('wirklich löschen?')) {
      this.gs.remove(this.offer.id)
        .subscribe(res => this.router.navigate(['../'], {relativeTo: this.route}))
    }
  }

  makeBooking(date: Dates) {
    if (confirm('wirklich buchen?')) {
      this.gs.makeBooking(this.authService.getCurrentUserId(), date).subscribe(() => this.router.navigate(['../booked']))
    }
  }
}
