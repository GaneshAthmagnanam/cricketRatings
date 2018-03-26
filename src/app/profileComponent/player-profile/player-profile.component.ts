import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

  playerName:any;
  constructor(private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(res=>{
    this.playerName=res['playerId'];
    
    })

}
}