import type { Language } from '..';

export default class Translation {
  readonly INFO = {
    LANG_ID: 'en' as Language,
    LANG_NAME: 'English',
  };

  //#region Common
  // Single words
  readonly COMMON = {
    HOME: 'Home',
    STREAM: 'Stream',
    LOGIN: 'Login',
    LOGOUT: 'Logout',
    EDIT: 'Edit',
    NEXT: 'Next',
    BACK: 'Back',
    AND: 'and',
    ADD: 'Add',
    IMPORT: 'Import',
    LANGUAGE: 'Language',
  };

  // Date
  readonly DATE = {
    MONTHS: {
      JANUARY: 'January',
      FEBRUARY: 'February',
      MARCH: 'March',
      APRIL: 'April',
      MAY: 'May',
      JUNE: 'June',
      JULY: 'July',
      AUGUST: 'August',
      SEPTEMBER: 'September',
      OCTOBER: 'October',
      NOVEMBER: 'November',
      DECEMBER: 'December',
    },
  };
  //#endregion

  //#region Page-specific
  // Home page
  readonly HOME = {
    USER_STATE_CARD: {
      TITLE: 'User state',
      NAME: 'Name',
      MAIL: 'Mail',
    },

    LATEST: 'Latest',
  };

  // Login page
  readonly LOGIN = {
    TITLE: this.COMMON.LOGIN,
    ALREADY_LOGGED_IN: 'You are already logged in',
    BUTTON_LOGIN: this.COMMON.LOGIN,
    BUTTON_LOGOUT: this.COMMON.LOGOUT,
  };

  // Add/Edit Song form
  readonly SONGFORM = {
    TITLE: 'Song form',
    FIELD_TITLE: 'Title',
    FIELD_TITLE_PLACEHOLDER: 'Song title',
    FIELD_PERMALINK: 'URL',
    FIELD_PERMALINK_PLACEHOLDER: 'permalink',
    FIELD_ARTISTS: 'Artists',
    FIELD_GENRE: 'Genre',
    FIELD_GENRE_PLACEHOLDER: 'Future House',
    FIELD_LABEL: 'Label',
    FIELD_LABEL_PLACEHOLDER: 'XY Records',
    FIELD_RELEASE_DATE: 'Release date',
    FIELD_TEMPO: 'Tempo',
    FIELD_TEMPO_PLACEHOLDER: '128 BPM',
    FIELD_KEY: 'Key',
    FIELD_KEY_PLACEHOLDER: 'C Major',
    FIELD_TYPE: 'Type',
    FIELD_TYPE_PLACEHOLDER: 'Remix',
    FIELD_ART_URL: 'Cover URL',
    FIELD_ART_URL_PLACEHOLDER: 'https://...',
    FIELD_DOWNLOADLINKS: 'Download links',
    FIELD_STREAMLINKS: 'Stream links',

    FIELD_SOUNDCLOUD_IMPORT: {
      TITLE: 'Import from Soundcloud',
      BUTTON_IMPORT: this.COMMON.IMPORT,
      TOAST_IMPORTING: 'Importing...',
      TOAST_IMPORTED: '{{title}} imported!',
    },

    FIELD_RELEASE_DATE_PICKER: {
      PICK_DATE: 'Pick a date',
    },

    TAB_STREAMLINKS: {
      TITLE: 'Stream links',
      BUTTON_ADD: this.COMMON.ADD,
      BUTTON_FETCHLINKS: 'Fetch links for selected',

      INFO_FETCHING_LINKS: 'Fetching links...',
      INFO_LINKS_FOUND: 'Found links for %platforms%',
      ERR_NO_LINKS_FOUND: 'No links found for %platforms%',
      ERR_NO_ARTIST: 'Please provide at least one artist',
      ERR_NO_TITLE: 'Please provide a song title',
    },

    TAB_DOWNLOADLINKS: {
      TITLE: 'Download links',
      BUTTON_ADD: this.COMMON.ADD,
      INPUT_FORMAT_PLACEHOLDER: 'Format',
      INPUT_EDIT_PLACEHOLDER: 'Edit (eg. Extended Mix)',
      SELECT_WAV: 'WAV',
      SELECT_MP3: 'MP3',
    },
  };

  // Tools page
  readonly TOOLS = {
    TITLE: 'Tools',
  };

  // Music analyzer page
  readonly ANALYZER = {
    TITLE: 'Audio analyzer',
    DESCRIPTION: 'Receive information about an audio file, such as BPM or key.',
    DATA_CARD_KEY: 'Key',
    DATA_CARD_TEMPO: 'Tempo',
    DATA_CARD_LOUDNESS_OVERALL: 'Overall loudness',
    DATA_CARD_LOUDNESS_RANGE: 'Loudness range',

    FILE_UPLOAD_INPUT: {
      UPLOAD: 'Upload an audio file',
      WORKING: 'Analyzing',
      WORKING_SUBTITLE: 'This will take a few seconds',
    },

    WORKER: {
      STATUS_KEYDATA: 'Analyzing key data',
      STATUS_TEMPO: 'Analyzing tempo',
      STATUS_LOUDNESS: 'Analyzing loudness',
      STATUS_FINISHED: 'Finished',
    },
  };
  //#endregion
}
