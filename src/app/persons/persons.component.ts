import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogPersonsComponent } from '../dialog-persons/dialog-persons.component';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent {
  url: string = "https://api.gameofthronesquotes.xyz/v1/characters";
  allPersons: any = []

  constructor(public dialog: MatDialog) {
    this.getAllPersons();
  }

  /**
   * This function will use the url an fetch the data. It throws an error when it is unsuccessful.
   */
  async getAllPersons() {
    await fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error loading API data. Status code: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        this.allPersons.push(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
      console.log(this.allPersons);
      
  }

  /**
   * This function will open a subpage with the info to the clicked character. It opens the component "DialogPersonsComponent" and hands over the data of the clicked character.
   * 
   * @param currentIndex This is the current index of the clicked character
   */
  openDialog(currentIndex) {
    this.dialog.open(DialogPersonsComponent, {
      data: {
        person: this.allPersons[0][currentIndex],
      },
    });
  }

}
