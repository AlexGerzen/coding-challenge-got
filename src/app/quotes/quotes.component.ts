import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent {
  url: string = "https://api.gameofthronesquotes.xyz/v1/random/5";
  fiveRandomQuotes: any = [];

  constructor() {
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
}
