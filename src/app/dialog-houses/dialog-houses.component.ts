import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-houses',
  templateUrl: './dialog-houses.component.html',
  styleUrls: ['./dialog-houses.component.scss']
})
export class DialogHousesComponent {
  allMembers: any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogHousesComponent>) {
    this.allMembers = data;
  }

  /**
   * This function is used to close the subpage
   */
  closeDialog() {
    this.dialogRef.close();
  }

}
