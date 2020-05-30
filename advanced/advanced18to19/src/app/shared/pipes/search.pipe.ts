import { Pipe, PipeTransform } from '@angular/core';
import { ICategory } from '../interfaces/category.interface';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(categories: Array<ICategory>, nameCategory: string): unknown {
    if (!nameCategory) {
      return categories;
    }
    if (!categories) {
      return [];
    }
    return categories.filter(cat => cat.name.includes(nameCategory));
  }

}
