export class ErrorMessage {

  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }

}

export const ErrorMessages = [
  new ErrorMessage('headline', 'required', "Du musst einen Titel für dein Angebot eingeben"),
  new ErrorMessage('subject', 'required', "Du musst ein Unterrichtsfach eingeben")
];
