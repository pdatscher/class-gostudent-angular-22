import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import { LoginComponent } from './login/login.component';
import {BookedTutoringsListComponent} from "./booked-tutorings-list/booked-tutorings-list.component";
import {BookedTutoringsListItemComponent} from "./booked-tutorings-list-item/booked-tutorings-list-item.component";
import {AuthenticationService} from "./shared/authentication.service";
import {AuthInterceptor} from "./shared/auth.interceptor";


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
    BookedTutoringsListComponent,
    BookedTutoringsListItemComponent,
    SearchComponent,
    NewofferFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule, FormsModule
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [GoStudentServiceService, AuthenticationService,{
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi   : true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
