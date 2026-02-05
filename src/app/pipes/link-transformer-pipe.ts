import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkTransformer',
})
export class LinkTransformerPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(
      /(?:#\S+|https?:\/\/\S+|www\.\S+|@\S+)/g,
      '<span class="twt-hl">$&</span>',
    );
  }
}
