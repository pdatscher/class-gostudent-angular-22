import {Tutoringoffer} from "./tutoringoffer";
import {Tutor} from "./tutor";

export class TutorFactory {


  static empty() : Tutor {
    return new Tutor(0,'','', '','',0,[{id:0, url:'', title:''}] );
  }

  static fromObject (rawTutor : any) : Tutor{
    return new Tutor(
      rawTutor.id,
      rawTutor.name,
      rawTutor.email,
      rawTutor.skills,
      rawTutor.password,
      rawTutor.isTutor,
      rawTutor.images,
    );

  }
}
