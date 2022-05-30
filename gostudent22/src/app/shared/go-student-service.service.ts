import { Injectable } from '@angular/core';
import {Dates, Tutoringoffer} from "./tutoringoffer";

@Injectable({
  providedIn: 'root'
})
export class GoStudentServiceService {

  offers : Tutoringoffer[];

  constructor() {
    this.offers = [

      new Tutoringoffer(
        1,
        "PHP Nachhilfe",
        "Serverseitige Webprogrammierung",
        3,
        "Hallo! Ich bin PHP-Profi aus dem 6. Semester und kann euch mit meinem Wissen bei der Übung helfen",
        [new Dates(1, "2022-05-29", "18:30"), new Dates(2, "2022-05-30", "17:00")]
      ),

      new Tutoringoffer(
        2,
        "Ich mach euch zu E-Learning-Profis",
        "E-Learning",
        1,
        "Lost im E-Learning? Bei mir seid ihr richtig!",
        [new Dates(3, "2022-05-21", "14:00")]
      )
    ];

    console.log(this.offers);
  }

  getAll(){
    return this.offers;
  }

}
