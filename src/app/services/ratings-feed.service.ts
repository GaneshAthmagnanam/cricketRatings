import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'

@Injectable()
export class RatingsFeedService {

  constructor(private http: Http) {


  }
  fetchODIRatings():any {

    return this.http.get("http://localhost:8004/ODIRatings").map(response =>{
        console.log(response.json())
        return response.json()
      }
      )
     
     
  }

}
