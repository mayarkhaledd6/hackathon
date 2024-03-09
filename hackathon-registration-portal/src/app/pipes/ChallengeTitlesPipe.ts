import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'challengeTitles'
})
export class ChallengeTitlesPipe implements PipeTransform {
  transform(value: string): string[] {
    try {
      const parsedValue = JSON.parse(value);
      if (Array.isArray(parsedValue)) {
        return parsedValue;
      } else {
        console.error('Error parsing challenge titles: Expected an array, but received:', parsedValue);
        return [];
      }
    } catch (error) {
      console.error('Error parsing challenge titles:', error);
      return [];
    }
  }
}
