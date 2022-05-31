import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Tutoringoffer} from "../shared/tutoringoffer";
import {GoStudentServiceService} from "../shared/go-student-service.service";
import {Tutor} from "../shared/tutor";

@Component({
  selector: 'bs-tutor-list',
  templateUrl: './tutor-list.component.html',
  styles: [
  ]
})
export class TutorListComponent implements OnInit {

  tutors: Tutor[] = [];

  @Output() showDetailsEvent = new EventEmitter<Tutor>();

  constructor(private gs: GoStudentServiceService) { }

  ngOnInit() : void {
    //ÜBER RXJS-DATENSTROM ITERIEREN -> SUBSCRIBE METHODE
    this.gs.getAllTutors().subscribe(res => this.tutors = res);
    console.log(this.tutors);
  }

  /*showTutorDetails(tutor : Tutor) {
    console.log(tutor);
    this.showDetailsEvent.emit(tutor);
  }*/

}
