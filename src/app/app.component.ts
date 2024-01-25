import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'coding-challenge-got';

  linkStatus = {
    houses: false,
    persons: false,
    quotes: false,
  };
  staticPath;

  constructor(private location: Location) {

  }

  ngOnInit(): void {
    this.updateStaticPath();
    this.checkUrlChange();
  }

  /**
   * This function will update the static path when the url is changed
   */
  updateStaticPath(): void {
    this.staticPath = this.getLastSegmentOfUrl();
    this.underlineText();
  }

  /**
   * This function will check if the url is changed
   */
  checkUrlChange() {
    this.location.onUrlChange(() => {
      this.updateStaticPath();
    });
  }


  /**
   * This function will get the last segment of the url
   * 
   * @returns It returns the last segment of the url
   */
  getLastSegmentOfUrl(): string {
    const path = this.location.path();
    const segments = path.split('/');
    return segments.length > 0 ? segments[segments.length - 1] : '';
  }

  /**
   * This function will highlight the background
   */
  underlineText() {
    this.clearAllBackgrounds();

    this.linkStatus[this.staticPath] = true;
  }

  /**
   * This function will clear all the backgorunds
   */
  clearAllBackgrounds() {
    this.linkStatus.houses = false;
    this.linkStatus.persons = false;
    this.linkStatus.quotes = false;
  }
}
