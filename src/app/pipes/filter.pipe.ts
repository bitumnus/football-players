import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../players.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(players: Player[], ...args: any[]): Player[] {
    const [search, field] = args;
    if (!search.trim()) {
      return players;
    }

    return players.filter(p => {
      return p[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
