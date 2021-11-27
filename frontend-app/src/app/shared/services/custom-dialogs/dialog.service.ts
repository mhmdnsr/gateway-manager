import {Injectable} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {MatDialogRef} from "@angular/material/dialog/dialog-ref";
import {MatDialogConfig} from "@angular/material/dialog/dialog-config";
import {ConfirmationDialogComponent} from '../../components/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  public openDialog(component: ComponentType<any>, id: string, data?: any, options: MatDialogConfig = {}): MatDialogRef<any> {
    return this.dialog.open(component, {
      id: `dialog-${id}`,
      panelClass: [`dialog-${id}-container`, 'default-dialog-panel-container'],
      backdropClass: [`dialog-${id}-backdrop`, 'default-dialog-panel-backdrop'],
      direction: 'ltr',
      data: data,
      ...options
    });
  }

  public closeDialog(id: string, result?: any): void {
    this.dialog.getDialogById(`dialog-${id}`)?.close(result);
  }

  public openConfirmDialog(message: string): Promise<boolean> {
    return this.dialog.open(ConfirmationDialogComponent, {
      id: `dialog-confirm-dialog`,
      panelClass: [`dialog-confirm-dialog-container`],
      backdropClass: [`dialog-confirm-dialog-backdrop`, 'default-dialog-panel-backdrop'],
      direction: 'ltr',
      data: {message: message}
    }).afterClosed().toPromise().then( confirmation => {
      return confirmation;
    }).catch( () => {
      return false;
    });
  }

  public closeConfirmDialog(result: boolean) {
    return this.closeDialog('confirm-dialog', result)
  }

}
