import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {

  confirmationMessage: string = '';

  constructor(@Inject(MAT_DIALOG_DATA) public message: {message: string}, private dialog: MatDialog) {
    this.confirmationMessage = message.message;
  }

  ngOnInit(): void {
  }

  closeDialog(isSave: boolean) {
    if (isSave) {
      this.closeConfirmationDialog('confirm-dialog', true);
    }else {
      this.closeConfirmationDialog('confirm-dialog', false);
    }
  }

  closeConfirmationDialog(id: string, result?: any): void {
    this.dialog.getDialogById(`dialog-${id}`)?.close(result);
  }

}
