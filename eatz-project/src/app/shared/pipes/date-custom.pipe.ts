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

  private padZero(number: number): string {
    return number.toString().padStart(2, '0');
  }

}
