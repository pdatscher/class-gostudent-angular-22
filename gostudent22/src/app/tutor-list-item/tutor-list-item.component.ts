import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Tutoringoffer} from "../shared/tutoringoffer";
import {GoStudentServiceService} from "../shared/go-student-service.service";
import {Tutor} from "../shared/tutor";

@Component({
  selector: 'a.bs-tutor-list-item',
  templateUrl: './tutor-list-item.component.html',
  styles: [
  ]
})
export class TutorListItemComponent implements OnInit {

  @Input() tutor: Tutor | undefined;

  constructor() { }

  ngOnInit() : void {
  }


}
