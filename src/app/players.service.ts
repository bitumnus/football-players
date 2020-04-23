import { Injectable } from '@angular/core';

export interface Player {
  id: number,
  fullname: string,
  name: string,
  description: string,
  team: string,
  photo: string,
  details: {
    number: number,
    position: string,
    age: number,
    birthday: string,
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
      name: 'David De Gea',
      description: 'Spanish professional footballer who plays as a goalkeeper for Premier League club Manchester United and the Spain national team.',
      team: 'Manchester United',
      details: {
        number: 1,
        position: 'Goalkeeper',
        age: 29,
        birthday: '07/11/1990',
        nationality: 'Spain',
        height: 192,
        weight: 74,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/David_de_Gea_2017.jpg/220px-David_de_Gea_2017.jpg'
    },
    {
      id: 2,
      fullname:'Cristiano Ronaldo dos Santos Aveiroe',
      name: 'Cristiano Ronaldo',
      description: 'Portuguese professional footballer who plays as a forward for Serie A club Juventus and captains the Portugal national team.',
      team:'Juventus',
      details: {
        number: 7,
        position:'Forward',
        age: 35,
        birthday:'05/02/1985',
        nationality:'Portugal',
        height: 187,
        weight: 74,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/230px-Cristiano_Ronaldo_2018.jpg'
    },
    {
      id: 3,
      fullname: 'Lionel Andrés Messi Cuccittini',
      name: 'Lionel Messi',
      description: 'Argentine professional footballer who plays as a forward and captains both Spanish club Barcelona and the Argentina national team.',
      team: 'Barcelona',
      details: {
        number: 10,
        position: 'Forward',
        age: 32,
        birthday: '24/06/1987',
        nationality: 'Argentina',
        height: 170,
        weight: 72,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Lionel_Messi_20180626.jpg/245px-Lionel_Messi_20180626.jpg'
    },
    {
      id: 4,
      fullname:'Francesco Totti',
      name: 'Francesco Totti',
      description: 'Italian former professional footballer who played for Roma and the Italy national team primarily as an attacking midfielder or second striker, but could also play as a lone striker or winger.',
      team:'Roma',
      details: {
        number: 10,
        position:'Attacking midfielder / Forward',
        age: 43,
        birthday:'27/09/1976',
        nationality:'Italy',
        height: 180,
        weight: 79,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/KL-2018_%284%29.jpg/220px-KL-2018_%284%29.jpg'
    },
    {
      id: 5,
      fullname:'Neymar da Silva Santos Júnior',
      name: 'Neymar',
      description: 'Brazilian professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and the Brazil national team.',
      team:'Paris Saint-Germain',
      details: {
        number: 10,
        position:'Forward',
        age:28,
        birthday:'05/02/1992',
        nationality:'Brazil',
        height: 175,
        weight: 68,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/220px-Bra-Cos_%281%29.jpg'
    },
    {
      id: 6,
      fullname:'Daniel Owen James',
      name: 'Daniel James',
      description: 'Professional footballer who plays as a winger for Premier League club Manchester United and the Wales national team.',
      team:'Manchester United',
      details: {
        number: 21,
        position:'Winger',
        age:22,
        birthday:'10/11/1997',
        nationality:'England',
        height: 170,
        weight: 76,
      },
      photo: 'https://lh3.googleusercontent.com/proxy/6JjoZA-oiiNAbp0fEFvTcK8ZS_RRItBxpH6VBvWSwvTSLU3vU9UulqZzKB9iWng3phVcDtoLpd2w1c4imqGPGIM0Dixic0NCebif54f_GNPZt1UXzge76Nv2qPh9'
    },
    {
      id: 7,
      fullname:'Romelu Menama Lukaku Bolingoli',
      name: 'Romelu Lukaku',
      description: 'Belgian professional footballer who plays as a striker for Serie A club Inter Milan and the Belgium national team.',
      team: 'Inter Milan',
      details: {
        number: 9,
        position: 'Striker',
        age: 26,
        birthday: '13/05/1993',
        nationality: 'Belgium',
        height: 190,
        weight: 82,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Romelu_Lukaku_with_Belgium_before_game_v_Brazil%2C_6_July_2018.jpg.png/175px-Romelu_Lukaku_with_Belgium_before_game_v_Brazil%2C_6_July_2018.jpg.png'
    },
    {
      id: 8,
      fullname:'Luis Suárez Miramontes',
      name: 'Luis Suárez',
      description: 'Spanish former footballer and manager. He played as a midfielder for Deportivo de La Coruña, España Industrial, FC Barcelona, Inter Milan, Sampdoria and the Spain national team.',
      team: 'Inter Milan',
      details: {
        number: 10,
        position: 'Attacking midfielder',
        age: 84,
        birthday: '02/05/1935',
        nationality: 'Spain',
        height: 175,
        weight: 73,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Luis_Suarez_Miramontes_Inter_San_Siro.png/220px-Luis_Suarez_Miramontes_Inter_San_Siro.png'
    },
    {
      id: 9,
      fullname:'Alessandro Del Piero',
      name: 'Alessandro Del Piero',
      description: 'Italian former professional footballer who mainly played as a deep-lying forward, although he was capable of playing in several offensive positions.',
      team: 'Juventus',
      details: {
        number: 10,
        position: 'Forward',
        age: 45,
        birthday: '09/11/1974',
        nationality: 'Italy',
        height: 174,
        weight: 71,
      },
      photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Alessandro_Del_Piero_in_2014.jpg/220px-Alessandro_Del_Piero_in_2014.jpg'
    },
  ]

  getById(id: number) {
    return this.players.find(p => p.id === id)
  }
}
