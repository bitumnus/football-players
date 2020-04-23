import { Pipe, PipeTransform } from '@angular/core';
import { Player } from '../players.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(players: Player[], ...args: any[]): Player[] {
    const [search, field, fromDate, toDate] = args;
    if (!search.trim()) {
      const fd = fromDate.split('-')
      const td = toDate.split('-')

      return players.filter(p => {
        const ud: any = p.details.birthday.split('/');
        const inputFromDate = new Date(fd[0], fd[1]-1, fd[2]);
        const inputToDate = new Date(td[0], td[1]-1, td[2]);
        const userDate = new Date(ud[2], ud[1]-1, ud[0]);
        return inputFromDate < userDate && userDate < inputToDate
      })
    }    
    return players.filter(p => {
      return p[field].toLowerCase().includes(search.toLowerCase())
    })
  }

}
