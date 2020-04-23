import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/players.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  search = ''
  searchByTeam = ''
  fromDate = '1930-01-01'
  toDate = `${new Date().getFullYear()}-0${new Date().getMonth() + 1}-${new Date().getDate()}`
  showTeams = false

    constructor(
      public playersServices: PlayersService,
      private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.showTeams = !!params.showTeams
    })
  }

}
