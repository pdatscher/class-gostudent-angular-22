import {Injectable, Input} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import jwt_decode from "jwt-decode";
import { Observable } from 'rxjs';
import {Tutor} from "./tutor";
import {GoStudentServiceService} from "./go-student-service.service";
import {map} from "rxjs/operators";


interface Token {
  exp: number;
  user: {
    id: string;
  }
}

@Injectable()

export class AuthenticationService {

  private api = 'http://gostudent22.s1910456005.student.kwmhgb.at/api/auth';



  constructor(private http: HttpClient,private gs:GoStudentServiceService) {  }


  login(email: string, password: string) : Observable<any> {
    return this.http.post(`${this.api}/login`, {
      email: email,
      password: password
    });
  }

  getToken(){
    return sessionStorage.getItem("token")
  }


  isTutor():boolean{
    return sessionStorage.getItem('isTutor') === 'true'
  }

  public getCurrentUserId() {
    return Number.parseInt(<string>sessionStorage.getItem("user_id"));
  }


  public setSessionStorage(token: string) {
    console.log("storing token");
    console.log(jwt_decode(token));
    const decodedToken = jwt_decode(token) as Token;
    console.log("##########",decodedToken);
    console.log(decodedToken.user.id);
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user_id", decodedToken.user.id);

    this.gs.getSingleTutor(this.getCurrentUserId()).subscribe(tutor=>sessionStorage.setItem("isTutor",String(tutor.isTutor===1)))
  }

  logout() {
    this.http.post(`${this.api}/logout`, {});
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user_id");
    sessionStorage.removeItem("isTutor")
    console.log("Logged out");
  }

  public isLoggedIn() {
    if (sessionStorage.getItem("token")) {
      let token : string = <string> sessionStorage.getItem("token");
      console.log(jwt_decode(token));
      const decodedToken = jwt_decode(token) as Token;
      let expirationDate: Date = new Date(0);
      expirationDate.setUTCSeconds(decodedToken.exp);
      if (expirationDate < new Date()) {
        console.log("token expired");
        sessionStorage.removeItem("token");
        return false;
      }
      return true;
    } else {
      return false;
    }
  }


  public isLoggedOut() {
    return !this.isLoggedIn();
  }

}
