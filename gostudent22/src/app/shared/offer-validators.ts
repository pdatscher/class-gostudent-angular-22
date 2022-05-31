import {GoStudentServiceService} from "./go-student-service.service";
import {FormControl} from "@angular/forms";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";



export class OfferValidators {

  /*static idExists(gs: GoStudentServiceService) {
    return function(control: FormControl) : any {
      return gs.check(control.value).pipe(map(exists => !exists ? null : (idExists: {valid: false})))
    }
  }*/
}
