import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage-angular';
import { EventsService } from '../services/events.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {

 
  constructor( private router:Router,
              private storage: Storage,
              private events:EventsService) {}
              
           ionViewDidEnter(){
 console.log(this.events.getEvents());

              }
              
  goToIntro(){
    console.log("go to intro");
    this.router.navigateByUrl('/intro');
   
}
}
