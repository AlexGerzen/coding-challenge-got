import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-persons',
  templateUrl: './dialog-persons.component.html',
  styleUrls: ['./dialog-persons.component.scss']
})
export class DialogPersonsComponent {
  personInfo: any;
  firstQuote: string = "";
  secondQuote: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogPersonsComponent>) {
    this.personInfo = data;
    this.setQuotes();
    
  }

  /**
   * This function checks if the person has more than one quote
   * 
   * @returns This function returns "true" if the person has more than one quote, else it returns false
   */
  checkForMoreThanOneQuote() {
    return this.personInfo.person.quotes.length > 1;
  }

  /**
   * This function will set the quotes. If there is only one quote it will be set, if there are more than one quotes, a function is called to show two random quotes
   */
  setQuotes() {
    if(!this.checkForMoreThanOneQuote()) {
      this.firstQuote = this.personInfo.person.quotes[0];
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
    let firstQuote = Math.floor(Math.random() * this.personInfo.person.quotes.length);
    let secondQuote = Math.floor(Math.random() * this.personInfo.person.quotes.length);

    while (firstQuote === secondQuote) {
      secondQuote = Math.floor(Math.random() * this.personInfo.person.quotes.length);
    }

    return [this.personInfo.person.quotes[firstQuote], this.personInfo.person.quotes[secondQuote]];
  }

  /**
   * This function is used to close the subpage
   */
  closeDialog() {
    this.dialogRef.close();
  }

}
