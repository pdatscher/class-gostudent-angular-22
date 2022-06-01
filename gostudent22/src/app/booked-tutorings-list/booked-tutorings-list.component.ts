import {Component, OnInit} from '@angular/core';
import {BookedTutoring} from "../shared/booked-tutoring";
import {GoStudentServiceService} from "../shared/go-student-service.service";
import {AuthenticationService} from "../shared/authentication.service";
import {Dates} from "../shared/dates";

@Component({
  selector: 'bs-booked-tutorings',
  templateUrl: './booked-tutorings-list.component.html',
  styles: []
})
export class BookedTutoringsListComponent implements OnInit {

  bookedTutorings: BookedTutoring[] = []

  constructor(private gs: GoStudentServiceService, private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.loadBookings()
  }

  loadBookings() {
    this.gs.getAllBookings(this.authService.getCurrentUserId()).subscribe(bookings => this.bookedTutorings = bookings)
  }

  cancelBooking(date: Dates) {
    this.gs.cancelBooking(date).subscribe(()=>this.loadBookings())
  }
}
