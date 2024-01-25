import { Component } from '@angular/core';
import { DialogHousesComponent } from '../dialog-houses/dialog-houses.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.scss']
})
export class HousesComponent {
  url: string = "https://api.gameofthronesquotes.xyz/v1/houses";
  search: string = "";

  allHouses = [];
  filteredHouses: any = [];

  constructor(public dialog: MatDialog) {
    this.getAllHouses();
  }

  /**
   * This function will use the url an fetch the data. It throws an error when it is unsuccessful.
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
      this.filter();
  }

  /**
   * This function will open a subpage with the members for the clicked house. It opens the component "DialogHousesComponent" and hands over the data of the clicked house.
   * 
   * @param currentIndex This is the current index of the clicked house
   */
  openDialog(currentIndex) {
    this.dialog.open(DialogHousesComponent, {
      data:  this.allHouses[0][currentIndex],
    });
  }

  /**
   * This function is used to filter the names of the houses after the searchterm
   */
  filter() {
    const searchTerm = this.search.toLowerCase();
  
    if (searchTerm === '') {
      this.filteredHouses = this.allHouses[0];
    } else {
      this.filteredHouses = this.allHouses[0].filter(house =>
        house.name && house.name.toLowerCase().includes(searchTerm)
      );
    }
  }
}
