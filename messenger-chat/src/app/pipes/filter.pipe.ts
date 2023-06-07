import { Pipe, PipeTransform } from '@angular/core';



@Pipe({
  name: 'filter'
})



export class FilterPipe implements PipeTransform {
  transform(items: any[], searchQuery: string): any[] {
    if (!searchQuery || searchQuery.trim() === '') {
      return items;
    }
    searchQuery = searchQuery.toLowerCase();
    return items.filter((item) => item.name.toLowerCase().includes(searchQuery));
  }

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

}
