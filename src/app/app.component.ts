import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'orbit-report';

  sourceList: Satellite[] = [];
  displayList: Satellite[] = [];

  constructor() {
    this.displayList = []
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';

    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(data) {
         const {satellites: sats} = data;
          for (let o of sats){
            this.sourceList.push(
              new Satellite(
                o.name,
                o.type,
                o.launchDate,
                o.orbitType, 
                o.operational
              )
            )
          }
          this.displayList = this.sourceList.slice(0);
       }.bind(this));
    }.bind(this));
 }

 search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.sourceList.length; i++) {
     let name = this.sourceList[i].name.toLowerCase();
     if (name.indexOf(searchTerm) >= 0) {
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  // assign this.displayList to be the array of matching satellites

  this.displayList = matchingSatellites;
}

}