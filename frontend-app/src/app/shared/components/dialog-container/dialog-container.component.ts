import {Component, Input, OnInit} from '@angular/core';
import {DialogService} from "../../services/custom-dialogs/dialog.service";

@Component({
  selector: 'app-dialog-container',
  templateUrl: './dialog-container.component.html',
  styleUrls: ['./dialog-container.component.scss']
})
export class DialogContainerComponent implements OnInit {
  @Input() dialogId?: string;
  @Input() dialogTitle?: string;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
  }

  closeDialog(): void {
    if (this.dialogId) {
      this.dialogService.closeDialog(this.dialogId);
    }
  }
}
