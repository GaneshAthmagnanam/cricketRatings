import { Component,OnInit } from '@angular/core';
import {RatingsFeedService} from './services/ratings-feed.service'
import { error } from 'selenium-webdriver';
import{Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ODI Cricket Ratings';
  ODIPlayers:any;
  constructor(private router:Router,private ratingsFeedService:RatingsFeedService){}

  ngOnInit(){
    this.ratingsFeedService.fetchODIRatings().subscribe(data=>{
      
      this.ODIPlayers=data["odiplayers"];
    },
    error=>{
      console.log(error)
    }
  )
  }
  showProfile(profile){
    console.log(profile);
    this.router.navigate(['player',profile]).then(s=>{
      console.log("success")
    }).catch(e=>{
      console.log("error");
    });
  }
}
