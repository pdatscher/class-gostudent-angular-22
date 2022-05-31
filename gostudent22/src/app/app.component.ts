import { Component } from '@angular/core';
import { Tutoringoffer } from "./shared/tutoringoffer";

@Component({
  selector: 'bs-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  listOn = true;
  detailsOn = false;
  offer : Tutoringoffer | undefined;

  showList() {
    this.listOn = true;
    this.detailsOn = false;
  }

  showDetails(offer : Tutoringoffer) {
    this.offer = offer;
    this.listOn = false;
    this.detailsOn = true;
  }



  title = 'gostudent22';
}
