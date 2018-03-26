import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {myroute} from './myRoutes';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import { PlayerProfileComponent } from './profileComponent/player-profile/player-profile.component';
import {HttpModule} from '@angular/http'
import {RatingsFeedService} from './services/ratings-feed.service'
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    PlayerProfileComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(myroute),
    BrowserModule,
    MatListModule,
    HttpModule
  ],
  providers: [RatingsFeedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
