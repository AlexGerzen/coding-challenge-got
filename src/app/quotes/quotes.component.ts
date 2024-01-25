import { Component } from '@angular/core';
import { DialogPersonsComponent } from '../dialog-persons/dialog-persons.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {
  url: string = "https://api.gameofthronesquotes.xyz/v1/random/5";
  fiveRandomQuotes: any = [];

  constructor(public dialog: MatDialog,) {
    this.getFiveRandomQuotes();
  }

  /**
   * This function will use the url an fetch the data. It throws an error when it is unsuccessful.
   */
  async getFiveRandomQuotes() {
    this.fiveRandomQuotes = [];
    await fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error loading API data. Status code: ${response.status}`);
        }

        return response.json();
      })
      .then(data => {
        this.fiveRandomQuotes.push(data);
      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }

  /**
   * This function will open the dialog with the information about the character
   * 
   * @param currentIndex THis is the current index of the person
   */
  openDialog(currentIndex) {
    this.dialog.open(DialogPersonsComponent, {
      data: "https://api.gameofthronesquotes.xyz/v1/character/" + this.fiveRandomQuotes[0][currentIndex].character.slug,
    });
  }
}
