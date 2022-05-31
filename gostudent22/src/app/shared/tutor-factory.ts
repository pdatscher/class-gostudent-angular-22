import {Tutoringoffer} from "./tutoringoffer";
import {Tutor} from "./tutor";

export class TutorFactory {


  static empty() : Tutor {
    return new Tutor(0,'','', '',1);
  }

  static fromObject (rawTutor : any) : Tutor{
    return new Tutor(
      rawTutor.id,
      rawTutor.name,
      rawTutor.email,
      rawTutor.password,
      rawTutor.isTutor,
    );

  }
}
