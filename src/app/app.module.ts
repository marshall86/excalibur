import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import {Globals}                from './globals/info';
import { AppComponent }         from './components/app.component';
import { NavigationComponent }  from './components/navigation.component';
import { AppRoutingModule }     from './modules/app.routing.module';
import { GameComponent }        from './components/game.component';
import { GamesComponent }       from './components/games.component';
import { AboutComponent }       from './components/about.component';
import { APIService }           from './services/api.service';
import { gamePipe }             from './pipes/gamePipe';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GameComponent,
    GamesComponent,
    AboutComponent,
    gamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [Globals, HttpModule, APIService],
  bootstrap: [AppComponent]
})
export class AppModule {}