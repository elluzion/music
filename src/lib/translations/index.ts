import English from './en';

export default class Translations {
  static readonly EN: Translation = new English();

  static get DEFAULT() {
    return this.EN;
  }
}

export interface Translation {
  readonly HELLO: string;
}
