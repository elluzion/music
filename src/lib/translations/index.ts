import Translation from './base';
import DE from './de';
import EN from './en';

export default class Translations {
  /**
   * Languages
   */
  static LANGUAGES = {
    en: new EN(),
    de: new DE(),
  };

  /**
   * @return The default translation
   */
  static get CURRENT(): Translation {
    return this.DEFAULT;
  }

  /**
   * @return The default translation.
   */
  static get DEFAULT(): Translation {
    return this.LANGUAGES['de'];
  }

  static INFO = this.CURRENT.INFO;

  // Accessing the default translation
  static COMMON = this.CURRENT.COMMON;
  static DATE = this.CURRENT.DATE;

  static HOME = this.CURRENT.HOME;
  static LOGIN = this.CURRENT.LOGIN;
  static SONGFORM = this.CURRENT.SONGFORM;
  static TOOLS = this.CURRENT.TOOLS;
  static ANALYZER = this.CURRENT.ANALYZER;
}

export const Languages = ['en', 'de'] as const;
export type Language = (typeof Languages)[number];
