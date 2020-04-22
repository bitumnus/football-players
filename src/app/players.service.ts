import { Injectable } from '@angular/core';

export interface Player {
  id: number,
  fullname: string,
  firstname: string,
  lastname: string,
  eponyms: string,
  description: string,
  number: number,
  position: string,
  age: number,
  birth_date: string,
  team: string,
  nationality: string,
  height: number,
  weight: number,
  photo: string,
}

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: Player[] = [
    {
      id: 1,
      fullname: 'A. Bernede',
      firstname: 'Antoine',
      lastname: 'Bernede',
      eponyms: '',
      description: 'pararam',
      number: 9,
      position: 'Midfielder',
      age: 20,
      birth_date: '26/05/1999',
      team: 'Paris',
      nationality: 'France',
      height: 177,
      weight: 74,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/230px-Cristiano_Ronaldo_2018.jpg'
    },
    {
      id: 2,
      fullname:'A. Bernede',
      firstname: 'Antoine',
      lastname: 'Bernede',
      eponyms: '',
      description: 'pararam',
      number: 9,
      position:'Midfielder',
      age:20,
      birth_date:'26/05/1999',
      team:'MU',
      nationality:'France',
      height: 177,
      weight: 74,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/230px-Cristiano_Ronaldo_2018.jpg'
    },
    {
      id: 3,
      fullname:'A. Bernede',
      firstname: 'Antoine',
      lastname: 'Bernede',
      eponyms: '',
      description: 'pararam',
      number: 9,
      position:'Midfielder',
      age:20,
      birth_date:'26/05/1999',
      team:'Inter',
      nationality:'France',
      height: 177,
      weight: 74,
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/230px-Cristiano_Ronaldo_2018.jpg'
    },
  ]

  getById(id: number) {
    return this.players.find(p => p.id === id)
  }
}
