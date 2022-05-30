import { Component } from '@angular/core';
import { Tutoringoffer } from "./shared/tutoringoffer";

@Component({
  selector: 'bs-root',
  //templateUrl: './app.component.html',
  template: `
    <bs-tutoring-offer-list (showDetailsEvent)="showDetails($event)" *ngIf="listOn"></bs-tutoring-offer-list>
    <bs-tutoring-offer-details (showListEvent)="showList()" *ngIf="detailsOn" [offer]="offer"></bs-tutoring-offer-details>
    `
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
