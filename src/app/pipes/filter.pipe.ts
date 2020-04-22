import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../players.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(players: Player[], ...args: any[]): Player[] {
    const [search, field, birthDate] = args;
    if (!search.trim()) {
      const parts = birthDate.split('-')

      return players.filter(p => {
        const part: any = p.details.birthday.split('/');
        const inputDate = new Date(parts[0], parts[1]-1, parts[2]);
        const scopeDate = new Date(part[2], part[1]-1, part[0]);
        return scopeDate > inputDate
      })
    }    
    return players.filter(p => {
      return p[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
