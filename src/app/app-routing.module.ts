import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AuthGuard} from './auth.guard'
import { PlayersComponent } from './players/players.component'
import { PlayerComponent } from './player/player.component'
import { ErrorPageComponent } from './error-page/error-page.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'players', component: PlayersComponent, canActivate: [AuthGuard]},
  {path: 'players/:id', component: PlayerComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
