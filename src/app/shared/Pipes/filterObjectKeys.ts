import { PipeTransform, Pipe } from '@angular/core';
import { TableResponse } from 'src/app/models/tableResponse';

@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(value:TableResponse) : any {
    let keys = [];
    for (let key in value) {
      keys.push(key);
    }
    return keys;
  }
}