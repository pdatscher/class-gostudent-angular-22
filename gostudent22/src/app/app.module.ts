import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { TutoringOfferListComponent } from './tutoring-offer-list/tutoring-offer-list.component';
import { TutoringOfferListItemComponent } from './tutoring-offer-list-item/tutoring-offer-list-item.component';
import { TutoringOfferDetailsComponent } from './tutoring-offer-details/tutoring-offer-details.component';
import { GoStudentServiceService } from "./shared/go-student-service.service";
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from "./app-routing.module";
import { TutorListComponent } from './tutor-list/tutor-list.component';
import { TutorListItemComponent } from './tutor-list-item/tutor-list-item.component';
import { TutorDetailsComponent } from './tutor-details/tutor-details.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NewofferFormComponent } from './newoffer-form/newoffer-form.component';


@NgModule({
  declarations: [
    AppComponent,
    TutoringOfferListComponent,
    TutoringOfferListItemComponent,
    TutoringOfferDetailsComponent,
    HomeComponent,
    TutorListComponent,
    TutorListItemComponent,
    TutorDetailsComponent,
    SearchComponent,
    NewofferFormComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [GoStudentServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
