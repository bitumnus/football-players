import { Injectable } from '@angular/core';

export interface Player {
  id: number,
  fullname: string,
  firstname: string,
  lastname: string,
  description: string,
  photo: string,
  details: {
    number: number,
    eponyms?: string,
    position: string,
    age: number,
    birthday: string,
    team: string,
    nationality: string,
    height: number,
    weight: number,
  }
}

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  players: Player[] = [
    {
      id: 1,
      fullname: 'David de Gea Quintana',
      firstname: 'David',
      lastname: 'De Gea',
      description: 'Spanish professional footballer who plays as a goalkeeper for Premier League club Manchester United and the Spain national team.',
      details: {
        eponyms: 'Dave',
        number: 1,
        position: 'Goalkeeper',
        age: 29,
        birthday: '07/11/1990',
        team: 'Manchester United',
        nationality: 'Spain',
        height: 192,
        weight: 74,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/David_de_Gea_2017.jpg/220px-David_de_Gea_2017.jpg'
    },
    {
      id: 2,
      fullname:'Cristiano Ronaldo dos Santos Aveiroe',
      firstname: 'Cristiano',
      lastname: 'Ronaldo',
      description: 'Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team.',
      details: {
        eponyms: 'CR7',
        number: 7,
        position:'Forward',
        age: 35,
        birthday:'05/02/1985',
        team:'Juventus',
        nationality:'Portugal',
        height: 187,
        weight: 74,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/230px-Cristiano_Ronaldo_2018.jpg'
    },
    {
      id: 3,
      fullname: 'Lionel Andrés Messi Cuccittini',
      firstname: 'Lionel',
      lastname: 'Messi',
      description: 'Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team.',
      details: {
        eponyms: 'Messi',
        number: 10,
        position: 'Forward',
        age: 32,
        birthday: '24/06/1987',
        team: 'Forward',
        nationality: 'Argentina',
        height: 170,
        weight: 72,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/245px-Lionel_Messi_20180626.jpg'
    },
    {
      id: 4,
      fullname:'Neymar da Silva Santos Júnior',
      firstname: 'Neymar',
      lastname: '',
      description: 'Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team.',
      details: {
        number: 10,
        position:'Forward',
        age:28,
        birthday:'05/02/1992',
        team:'Paris Saint-Germain',
        nationality:'Brazil',
        height: 175,
        weight: 68,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/220px-Bra-Cos_%281%29.jpg'
    },
    {
      id: 5,
      fullname:'Daniel Owen James',
      firstname: 'Daniel',
      lastname: 'James',
      description: '',
      details: {
        number: 21,
        position:'Winger',
        age:22,
        birthday:'10/11/1997',
        team:'Manchester United',
        nationality:'England',
        height: 170,
        weight: 64,
      },
      photo: ''
    },
    {
      id: 6,
      fullname:'Bernede',
      firstname: 'Antoine',
      lastname: 'Bernede',
      description: '',
      details: {
        number: 9,
        position: 'Midfielder',
        age: 20,
        birthday: '26/05/1999',
        team: 'Inter',
        nationality: 'France',
        height: 177,
        weight: 64,
      },
      photo: ''
    },
  ]

  getById(id: number) {
    return this.players.find(p => p.id === id)
  }
}
