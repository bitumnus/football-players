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
  searchField = 'fullname'
  showTeams = false

    constructor(
      public playersServices: PlayersService,
      private route: ActivatedRoute,
    ) { 

    }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.showTeams = !!params.showTeams
    })
  }

}
