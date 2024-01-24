import { Component } from '@angular/core';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {
  url: string = "https://api.gameofthronesquotes.xyz/v1/houses";
  search: string = "";

  allHouses = [];

  constructor() {
    this.getAllHouses();
  }

  /**
   * This function will use the url an fetch the data
   */
  async getAllHouses() {
    await fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error loading API data. Status code: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        this.allHouses.push(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }
}
