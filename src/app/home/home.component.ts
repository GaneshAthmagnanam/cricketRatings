
import { Component,OnInit } from '@angular/core';
import {RatingsFeedService} from '../services/ratings-feed.service'
import { error } from 'selenium-webdriver';
import{Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Christmas Cricket Ratings';
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

