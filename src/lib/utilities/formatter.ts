import t from '$lib/translations';

export default class Formatter {
  //#region Dates
  static formatDate(date: Date, shorten: boolean): string {
    const day = date.getDate();
    const monthNames = t.DATE.MONTHS;
    let monthName = Object.values(monthNames)[date.getMonth()];
    let year = date.getFullYear().toString();
    let ordinalSuffix;
    // In german, we don't need the suffix and use a dot instead.
    if (t.INFO.LANG_ID == 'de') {
      ordinalSuffix = '.';
    } else {
      ordinalSuffix = Formatter.getOrdinalSuffix(day);
    }

    if (shorten) {
      if (monthName.length > 5) {
        monthName = monthName.slice(0, 3) + '.';
      }
      year = year.slice(2);
    }

    return `${day}${ordinalSuffix} ${monthName} ${year}`;
  }
  //#endregion

  //#region Lists
  static joinList(list: string[], nice: boolean = false): string {
    if (!nice) {
      return list.join(', ');
    } else if (list.length === 2) {
      return list.join(` ${t.COMMON.AND} `);
    } else if (list.length > 2) {
      return list.slice(0, -1).join(', ') + ' & ' + list[list.length - 1];
    } else {
      return list[0] || '';
    }
  }
  //#endregion

  //#region String modification
  static pascalCase(input: string) {
    return input[0].toUpperCase() + input.slice(1).toLowerCase();
  }

  static toUrlSafeString(input: string) {
    input = input
      .toLowerCase()
      .normalize('NFD') // normalize string
      .replace(/[\u0300-\u036f]/g, '') // remove accents
      .replace(/[^a-zA-Z0-9 ]/g, ''); // remove all characters except letters, numbers and whitespace
    return this.cleanWhitespace(input, '-');
  }

  static cleanWhitespace(input: string, filler?: string) {
    return input.replace(/\s+/g, filler || ' ').trim();
  }
  //#endregion

  //#region Private
  private static getOrdinalSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    } else {
      switch (day % 10) {
        case 1:
          return 'st';
        case 2:
          return 'nd';
        case 3:
          return 'rd';
        default:
          return 'th';
      }
    }
  }
  //#endregion
}
