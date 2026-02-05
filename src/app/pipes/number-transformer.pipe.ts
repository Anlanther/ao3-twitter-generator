import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberTransformer',
  standalone: true,
})
export class NumberTransformerPipe implements PipeTransform {
  transform(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
    }
    return num.toString();
  }
}
