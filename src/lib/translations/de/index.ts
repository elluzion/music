import type { Language } from '..';
import Translation from '../base';

export default class DE extends Translation {
  INFO = {
    LANG_ID: 'de' as Language,
    LANG_NAME: 'Deutsch',
  };

  //#region Common
  // Single words
  COMMON = {
    HOME: 'Startseite',
    STREAM: 'Stream',
    LOGIN: 'Anmelden',
    LOGOUT: 'Abmelden',
    EDIT: 'Bearbeiten',
    NEXT: 'Weiter',
    BACK: 'Zurück',
    AND: 'und',
    ADD: 'Hinzufügen',
    IMPORT: 'Importieren',
    LANGUAGE: 'Sprache',
  };

  // Date
  DATE = {
    MONTHS: {
      JANUARY: 'Januar',
      FEBRUARY: 'Februar',
      MARCH: 'März',
      APRIL: 'April',
      MAY: 'Mai',
      JUNE: 'Juni',
      JULY: 'Juli',
      AUGUST: 'August',
      SEPTEMBER: 'September',
      OCTOBER: 'Oktober',
      NOVEMBER: 'November',
      DECEMBER: 'Dezember',
    },
  };
  //#endregion

  //#region Page-specific
  // Home page
  HOME = {
    USER_STATE_CARD: {
      TITLE: 'Benutzerstatus',
      NAME: 'Name',
      MAIL: 'E-Mail',
    },
    LATEST: 'Neueste',
  };

  // Login page
  LOGIN = {
    TITLE: this.COMMON.LOGIN,
    ALREADY_LOGGED_IN: 'Du bist bereits angemeldet',
    BUTTON_LOGIN: this.COMMON.LOGIN,
    BUTTON_LOGOUT: this.COMMON.LOGOUT,
  };

  // Add/Edit Song form
  SONGFORM = {
    TITLE: 'Song-Formular',
    FIELD_TITLE: 'Titel',
    FIELD_TITLE_PLACEHOLDER: 'Songtitel',
    FIELD_PERMALINK: 'URL',
    FIELD_PERMALINK_PLACEHOLDER: 'permalink',
    FIELD_ARTISTS: 'Künstler',
    FIELD_GENRE: 'Genre',
    FIELD_GENRE_PLACEHOLDER: 'Future House',
    FIELD_LABEL: 'Label',
    FIELD_LABEL_PLACEHOLDER: 'XY Records',
    FIELD_RELEASE_DATE: 'Veröffentlichungsdatum',
    FIELD_TEMPO: 'Tempo',
    FIELD_TEMPO_PLACEHOLDER: '128 BPM',
    FIELD_KEY: 'Tonart',
    FIELD_KEY_PLACEHOLDER: 'C-Dur',
    FIELD_TYPE: 'Typ',
    FIELD_TYPE_PLACEHOLDER: 'Remix',
    FIELD_ART_URL: 'Cover-URL',
    FIELD_ART_URL_PLACEHOLDER: 'https://...',
    FIELD_DOWNLOADLINKS: 'Download-Links',
    FIELD_STREAMLINKS: 'Stream-Links',

    FIELD_SOUNDCLOUD_IMPORT: {
      TITLE: 'Importieren von Soundcloud',
      BUTTON_IMPORT: this.COMMON.IMPORT,
      TOAST_IMPORTING: 'Importieren...',
      TOAST_IMPORTED: '{{title}} importiert!',
    },

    FIELD_RELEASE_DATE_PICKER: {
      PICK_DATE: 'Datum wählen',
    },

    TAB_STREAMLINKS: {
      TITLE: 'Stream-Links',
      BUTTON_ADD: this.COMMON.ADD,
      BUTTON_FETCHLINKS: 'Links für ausgewählte abrufen',

      INFO_FETCHING_LINKS: 'Links werden abgerufen...',
      INFO_LINKS_FOUND: 'Gefundene Links für %platforms%',
      ERR_NO_LINKS_FOUND: 'Keine Links gefunden für %platforms%',
      ERR_NO_ARTIST: 'Bitte geben Sie mindestens einen Künstler an',
      ERR_NO_TITLE: 'Bitte geben Sie einen Songtitel an',
    },

    TAB_DOWNLOADLINKS: {
      TITLE: 'Download-Links',
      BUTTON_ADD: this.COMMON.ADD,
      INPUT_FORMAT_PLACEHOLDER: 'Format',
      INPUT_EDIT_PLACEHOLDER: 'Edit (z.B. Extended Mix)',
      SELECT_WAV: 'WAV',
      SELECT_MP3: 'MP3',
    },
  };

  // Tools page
  TOOLS = {
    TITLE: 'Tools',
  };

  // Music analyzer page
  ANALYZER = {
    TITLE: 'Audio-Analyse',
    DESCRIPTION: 'Erhalte Informationen über eine Audio-Datei, wie zum Beispiel BPM oder Tonart.',
    DATA_CARD_KEY: 'Tonart',
    DATA_CARD_TEMPO: 'Tempo',
    DATA_CARD_LOUDNESS_OVERALL: 'Lautstärke insgesamt',
    DATA_CARD_LOUDNESS_RANGE: 'Lautstärkerange',

    FILE_UPLOAD_INPUT: {
      UPLOAD: 'Audio-Datei hochladen',
      WORKING: 'Analyse läuft',
      WORKING_SUBTITLE: 'Dies dauert ein paar Sekunden',
    },

    WORKER: {
      STATUS_KEYDATA: 'Tonart-Daten analysieren',
      STATUS_TEMPO: 'Tempo analysieren',
      STATUS_LOUDNESS: 'Lautstärke analysieren',
      STATUS_FINISHED: 'Fertig',
    },
  };
  //#endregion
}
