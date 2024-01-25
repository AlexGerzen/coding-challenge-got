import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogHousesComponent } from '../dialog-houses/dialog-houses.component';

@Component({
  selector: 'app-dialog-persons',
  templateUrl: './dialog-persons.component.html',
  styleUrls: ['./dialog-persons.component.scss']
})
export class DialogPersonsComponent {
  personInfo: any = [];
  firstQuote: string = "";
  secondQuote: string = "";
  url: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<DialogPersonsComponent>) {
    this.checkTypeOfData()
  }

  /**
   * This function is used to check the type of data
   */
  checkTypeOfData() {
    if (typeof this.data === "string") {
      this.url = this.data;
      this.getPerson();
    } else {
      this.personInfo = this.data;
      this.setQuotes();
    }
  }

  /**
   * This function is used to fetch the information about the person
   */
  async getPerson() {
    await fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error loading API data. Status code: ${response.status}`);
        }

        return response.json();
      })
      .then(personInfo => {
        this.personInfo = personInfo[0];

      })
      .catch(error => {
        console.error('API request error:', error);
      });

    this.setQuotes();
  }

  /**
   * This function checks if the person has more than one quote
   * 
   * @returns This function returns "true" if the person has more than one quote, else it returns false
   */
  checkForMoreThanOneQuote() {
    if (this.personInfo.quotes) {
      return this.personInfo.quotes.length > 1;
    } else {
      return false
    }

  }

  /**
   * This function will set the quotes. If there is only one quote it will be set, if there are more than one quotes, a function is called to show two random quotes
   */
  setQuotes() {
    if (!this.checkForMoreThanOneQuote()) {
      this.firstQuote = this.personInfo.quotes[0];
    } else {
      [this.firstQuote, this.secondQuote] = this.twoRandomQuotes();
    }

  }

  /**
   * This function will return two random quotes from the character
   * 
   * @returns It returns two random quotes
   */
  twoRandomQuotes() {
    let firstQuote = Math.floor(Math.random() * this.personInfo.quotes.length);
    let secondQuote = Math.floor(Math.random() * this.personInfo.quotes.length);

    while (firstQuote === secondQuote) {
      secondQuote = Math.floor(Math.random() * this.personInfo.quotes.length);
    }

    return [this.personInfo.quotes[firstQuote], this.personInfo.quotes[secondQuote]];
  }

  /**
   * This function is used to close the subpage
   */
  closeDialog() {
    this.dialogRef.close();
  }

  /**
   * This function is used to open the info about the clicked house
   * 
   * @returns It returns the function if this component was opened through a dialog
   */
  openDialog() {
    if (typeof this.data === "string") {
      return
    } else {
      this.dialog.open(DialogHousesComponent, {
        data: "https://api.gameofthronesquotes.xyz/v1/house/" + this.personInfo.house.slug,
      });
    }
  }

}
