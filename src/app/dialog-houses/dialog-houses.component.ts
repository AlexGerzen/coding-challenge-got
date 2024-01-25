import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogPersonsComponent } from '../dialog-persons/dialog-persons.component';

@Component({
  selector: 'app-dialog-houses',
  templateUrl: './dialog-houses.component.html',
  styleUrls: ['./dialog-houses.component.scss']
})
export class DialogHousesComponent {
  allMembers: any;
  url: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<DialogHousesComponent>) {
    this.checkTypeOfData();
  }

  /**
   * This function is used to check which type "data" has
   */
  checkTypeOfData() {
    if (typeof this.data === "string") {
      this.url = this.data;
      this.getHouse();
    } else {
      this.allMembers = this.data;
    }
  }

  /**
   * This function is used to fetch the information about the house
   */
  async getHouse() {
    await fetch(this.url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error loading API data. Status code: ${response.status}`);
        }

        return response.json();
      })
      .then(members => {
        this.allMembers = members[0];

      })
      .catch(error => {
        console.error('API request error:', error);
      });
  }

  /**
   * This function is used to close the subpage
   */
  closeDialog() {
    this.dialogRef.close();
  }


  /**
   * This function is used to open the info about the clicked person
   * 
   * @param currentIndex This is the current index of the member
   * @returns It returns the function if this component was opened through a dialog
   */
  openDialog(currentIndex) {
    if (typeof this.data === "string") {
      return
    } else {
      this.dialog.open(DialogPersonsComponent, {
        data: "https://api.gameofthronesquotes.xyz/v1/character/" + this.allMembers.members[currentIndex].slug,
      });
    }

  }

}
