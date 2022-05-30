import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TutoringOfferListComponent } from './tutoring-offer-list/tutoring-offer-list.component';
import { TutoringOfferListItemComponent } from './tutoring-offer-list-item/tutoring-offer-list-item.component';
import { TutoringOfferDetailsComponent } from './tutoring-offer-details/tutoring-offer-details.component';
import {GoStudentServiceService} from "./shared/go-student-service.service";

@NgModule({
  declarations: [
    AppComponent,
    TutoringOfferListComponent,
    TutoringOfferListItemComponent,
    TutoringOfferDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoStudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
