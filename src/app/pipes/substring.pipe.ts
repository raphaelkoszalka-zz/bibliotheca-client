import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substr'
})
export class SubStringPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return  'Book without description.';
    }
    if (value.length > 140) {
      value = value.substr(0, 140);
      return value + '...';
    }
    return value;
  }

}
