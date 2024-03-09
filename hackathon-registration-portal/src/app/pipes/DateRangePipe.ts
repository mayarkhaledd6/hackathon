import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateRange'
})
export class DateRangePipe implements PipeTransform {
  transform(dateRange: string): string {
    const dates = dateRange.split(' - ');
    const startDate = new Date(dates[0]);
    const endDate = new Date(dates[1]);
    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`;
  }
}
