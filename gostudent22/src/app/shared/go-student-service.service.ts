import { Injectable } from '@angular/core';
import {Dates, Tutoringoffer} from "./tutoringoffer";
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import { catchError, retry } from "rxjs/operators";
import {Tutor} from "./tutor";
import {BookedTutoring} from "./booked-tutoring";

@Injectable({
  providedIn: 'root'
})
export class GoStudentServiceService {

  //offers : Tutoringoffer[];

  //HARDCODIERT - SOLLTE IN CONFIG (.env)
  private api = "http://gostudent22.s1910456005.student.kwmhgb.at/api";

  constructor(private http: HttpClient) {
    /*
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

    console.log(this.offers);*/
  }

  getAll() : Observable<Array<Tutoringoffer>> {
    //return this.offers;
    return this.http.get<Array<Tutoringoffer>>(`${this.api}/tutoringoffers`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(id: number) : Observable<Tutoringoffer> {
    return this.http.get<Tutoringoffer>(`${this.api}/tutoringoffers/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
    //return <Tutoringoffer>this.offers.find(offer => offer.id === id);
  }

  remove(id: number): Observable<any> {
    return this.http.delete(`${this.api}/tutoringoffers/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  /*check(id: number) : Observable<Boolean> {
    return this.http.get<Boolean>(`${this.api}/tutoringoffers/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }*/

  searchSubject(searchTerm:string): Observable<Array<Tutoringoffer>> {
    return this.http.get<Tutoringoffer>(`${this.api}/tutoringoffers/search/${searchTerm}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  update(offer: Tutoringoffer) : Observable<any> {
    return this.http.put(`${this.api}/tutoringoffers/${offer.id}`, offer).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  create(offer: Tutoringoffer) : Observable<any> {
    return this.http.post(`${this.api}/tutoringoffers`, offer).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllTutors() : Observable<Array<Tutor>> {
    return this.http.get<Array<Tutor>>(`${this.api}/users`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingleTutor(id: number) : Observable<Tutor> {
    return this.http.get<Tutor>(`${this.api}/users/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllBookings(userId: number): Observable<BookedTutoring[]> {
    return this.http.get<BookedTutoring[]>(`${this.api}/users/${userId}/bookings`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  makeBooking(userId: number, dateId: number): Observable<any> {
    return this.http.put(`${this.api}/users/${userId}/bookings/${dateId}`, dateId).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  cancelBooking(userId: number, dateId: number): Observable<any> {
    return this.http.delete(`${this.api}/users/${userId}/bookings/${dateId}`)
  }

  // LIEFERT EIN EVENT WENN ES PROBLEM MIT REST SERVICE GIBT
  private errorHandler(error: Error |any) : Observable<any> {
    return throwError(() => new Error(error));
  }

}
