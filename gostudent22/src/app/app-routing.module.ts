import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TutoringOfferListComponent } from "./tutoring-offer-list/tutoring-offer-list.component";
import { TutoringOfferDetailsComponent } from "./tutoring-offer-details/tutoring-offer-details.component";
import { TutorListComponent } from "./tutor-list/tutor-list.component";
import {NewofferFormComponent} from "./newoffer-form/newoffer-form.component";
import {LoginComponent} from "./login/login.component";
import {BookedTutoringsListComponent} from "./booked-tutorings-list/booked-tutorings-list.component";
import {AppComponent} from "./app.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'offers', component: TutoringOfferListComponent },
  { path: 'offers/:id', component: TutoringOfferDetailsComponent },
  { path: 'tutors', component: TutorListComponent },
  { path: 'tutors/:id', component: TutorListComponent },
  { path: 'admin', component: NewofferFormComponent },
  { path: 'admin/:id', component: NewofferFormComponent },
  //{ path: 'admin', component: BookFormComponent, canActivate:[CanNavigateToAdminGuard] },
  //{ path: 'admin/:isbn', component: BookFormComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: HomeComponent },
  { path: 'booked', component: BookedTutoringsListComponent}
];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []

})

export class AppRoutingModule { }
