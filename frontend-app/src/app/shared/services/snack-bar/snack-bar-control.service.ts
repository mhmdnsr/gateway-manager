import {Injectable} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {SnackBarComponent} from '../../components/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root'
})
export class SnackBarControlService {

  constructor(private snackBarService: MatSnackBar) {
  }

  openErrorSnackbar(error: string) {
    return this.snackBarService.openFromComponent(SnackBarComponent, {
      data: {error: error},
      panelClass: 'custom-snackbar',
      horizontalPosition: 'center',
      verticalPosition: 'top',
      direction: 'ltr',
      duration: 3000,
    }).afterDismissed().toPromise();
  }

  closeAllSnackBars() {
    this.snackBarService.dismiss();
  }
}
