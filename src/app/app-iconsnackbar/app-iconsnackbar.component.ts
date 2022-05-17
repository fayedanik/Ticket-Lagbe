import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { AppViewSeatsComponent } from '../app-home/components/app-view-seats/app-view-seats.component';
@Component({
  selector: 'app-app-iconsnackbar',
  templateUrl: './app-iconsnackbar.component.html',
  styleUrls: ['./app-iconsnackbar.component.scss']
})
export class AppIconsnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,public snackbarRef:MatSnackBarRef<AppIconsnackbarComponent>) { }

  ngOnInit(): void {

  }

  closeSnackBar() {
    this.snackbarRef.dismiss();
  }

}
