import { Component } from '@angular/core';
import { AuthenticationService } from "./shared/authentication.service";
import { Tutoringoffer } from "./shared/tutoringoffer";
import { BookedTutoring} from "./shared/booked-tutoring";
import { BookedTutoringsListComponent} from "./booked-tutorings-list/booked-tutorings-list.component";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  listOn = true;
  detailsOn = false;
  offer : Tutoringoffer | undefined;

  /*showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(offer : Tutoringoffer) {
    this.offer = offer;
    this.listOn = false;
    this.detailsOn = true;
  }*/
  constructor (public authService: AuthenticationService) {}

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getLoginLabel() {
    return this.isLoggedIn() ? "Log Out" : "Log In";
  }


  title = 'gostudent22';
}
