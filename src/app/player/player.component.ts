import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PlayersService, Player } from '../players.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  player: Player

  constructor(
    private route: ActivatedRoute,
    private playersServie: PlayersService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.player = this.playersServie.getById(+params.id)
    })
  }

}
