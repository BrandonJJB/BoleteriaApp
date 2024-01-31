import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
urlServer="http://localhost:3000";
  constructor() { }

getEvents(){
return fetch(`${this.urlServer}/events`).then(
  response=>response.json()
);
}

}
