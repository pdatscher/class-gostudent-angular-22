import {Image} from "./image";
export {Image} from "./image";

export class Tutor {

  constructor(

    public id: number,
    public name: string,
    public email: string,
    public skills: string,
    public password: string,
    public isTutor: number,
    public images?: Image[]
  ) {

  }

}
