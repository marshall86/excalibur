import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent }       from '../components/games.component';
import { GameComponent }       from '../components/game.component';
import { AboutComponent }       from '../components/about.component';

const appRoutes: Routes = [
   { path: '',              component: AboutComponent },
   { path: 'games/:id',     component: GameComponent },
   { path: 'popular-games', component: GamesComponent },
   { path: 'video-slots',   component: GamesComponent },
   { path: 'table-games',   component: GamesComponent },
   { path: 'video-poker',   component: GamesComponent },
   { path: 'classic-slots', component: GamesComponent },
   { path: 'jackpot-games', component: GamesComponent },
   { path: 'other-games',   component: GamesComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}