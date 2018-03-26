import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component'
import {PlayerProfileComponent} from './profileComponent/player-profile/player-profile.component'
export const myroute:Routes=[

    {
        path:'home',
        component:HomeComponent
    },
    
    {
        path:'player/:playerId',
        component:PlayerProfileComponent
    }
]