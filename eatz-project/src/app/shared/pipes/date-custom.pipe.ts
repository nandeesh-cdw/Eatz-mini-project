import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCustom'
})
export class DateCustomPipe implements PipeTransform {

  transform(value: any): string {
    const date = new Date(value);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    let period = 'am';
    if (hours >= 12) {
      period = 'pm';
    }
    const displayHours = hours % 12 || 12;

    const formattedDate = `${day}${this.getOrdinalSuffix(day)} ${month} ${year},${displayHours}:${this.padZero(minutes)}${period}`;
    return formattedDate;
  }

  private getOrdinalSuffix(day: number): string {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const relevantDigits = day % 100;
    const suffix = relevantDigits > 10 && relevantDigits < 20 ? suffixes[0] : suffixes[relevantDigits % 10];
    return suffix;
  }

  private padZero(number: number): string {
    return number.toString().padStart(2, '0');
  }

}
