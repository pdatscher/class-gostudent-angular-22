import {Tutoringoffer} from "./tutoringoffer";

export class OfferFactory {

  static empty() : Tutoringoffer {
    return new Tutoringoffer(0,'','', 0,'',[{id:0, day: '', time: ''}]);
  }

  static fromObject (rawTutoringOffer : any) : Tutoringoffer{
    return new Tutoringoffer(
      rawTutoringOffer.id,
      rawTutoringOffer.headline,
      rawTutoringOffer.subject,
      rawTutoringOffer.user_id,
      rawTutoringOffer.description,
      rawTutoringOffer.dates //TODO wie funktioniert das mit Array mit Day und Time
    );

  }

}
