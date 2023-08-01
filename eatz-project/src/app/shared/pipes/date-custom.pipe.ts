import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCustom',
})
export class DateCustomPipe implements PipeTransform {
  transform(value: any): string {
    // constants
    const date = new Date(value);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // period am or pm
    let period = 'am';
    if (hours >= 12) {
      period = 'pm';
    }

    // hours
    const displayHours = hours % 12 || 12;

    // output formatted date
    const formattedDate = `${day}${this.getOrdinalSuffix(
      day
    )} ${month} ${year}, ${displayHours}:${this.padZero(minutes)} ${period}`;
    return formattedDate;
  }

  /**
   * this method is used to get the ordinal suffix from the date
   * @param day
   * @returns
   */
  private getOrdinalSuffix(day: number): string {
    if (day >= 11 && day <= 13) {
      return 'th';
    }

    const lastDigit = day % 10;
    switch (lastDigit) {
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

  /* The `padZero` method is a private helper method within the `DateCustomPipe` class. It takes a
  number as input and returns a string with the number padded with a leading zero if it is a single
  digit number. */
  private padZero(number: number): string {
    return number.toString().padStart(2, '0');
  }
}
