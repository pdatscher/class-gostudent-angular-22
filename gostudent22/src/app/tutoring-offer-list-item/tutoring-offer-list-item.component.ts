import {Component, Input, OnInit} from '@angular/core';
import {Tutoringoffer} from "../shared/tutoringoffer";
import {Dates} from "../shared/tutoringoffer";
import {Image} from "../shared/tutoringoffer";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'a.bs-tutoring-offer-list-item',
  templateUrl: './tutoring-offer-list-item.component.html',
  styles: []
})
export class TutoringOfferListItemComponent implements OnInit {
  @Input() offer: Tutoringoffer | undefined;

  constructor(public authService: AuthenticationService) {
  }

  ngOnInit(): void {
  }

  availableDates() {
    return this.offer?.dates?.filter(d => !d.user_id || d.user_id === this.authService.getCurrentUserId())
  }

}
