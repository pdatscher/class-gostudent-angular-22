
import { Image } from './image';
export { Image } from './image';
import { Dates } from './dates';
import {Tutor} from "./tutor";
export { Dates } from './dates';

export class Tutoringoffer {

  constructor(
    public id: number,
    public headline: string,
    public subject: string,
    public user_id: number,
    public user?:Tutor,
    public description?: string,
    //public images?: Image[],
    public dates?: Dates[]
  ) {

  }

}
