import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookedTutoring} from "../shared/booked-tutoring";
import {GoStudentServiceService} from "../shared/go-student-service.service";
import {Dates} from "../shared/dates";

@Component({
  selector: 'bs-booked-tutorings-list-item',
  templateUrl: './booked-tutorings-list-item.component.html',
  styles: []
})
export class BookedTutoringsListItemComponent implements OnInit {

  @Input() bookedTutoring!: BookedTutoring;

  @Output() onCancel = new EventEmitter<Dates>();

  constructor(private gs: GoStudentServiceService) {
  }

  ngOnInit(): void {
  }

  cancelBooking() {
    if(confirm("wirklich stornieren?")) {
      this.onCancel.emit(this.bookedTutoring)
    }
  }

}
