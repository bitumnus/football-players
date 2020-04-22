import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PlayersComponent } from './players/players.component';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { DisableBtnDirective } from './directives/disable-btn.directive';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    PlayersComponent,
    HomeComponent,
    PlayerComponent,
    DisableBtnDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
