import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { AppLoginComponent } from '../../app-login/app-login.component';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor( public mediaobserver: MediaObserver,public dialog:MatDialog ) { }
  
  screensize:string = 'lg';
  mediaSub:Subscription;

  ngOnInit(): void {
    this.mediaSub = this.mediaobserver.media$.subscribe(
      ( res:MediaChange ) => {
        this.screensize = res.mqAlias;
        //console.log(this.screensize);
      }
    );
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  getmargin() {
    if( this.screensize==='sm' || this.screensize==='xs' || this.screensize==='md' ) {
      return '80px';
    }
    else {
      return '150px';
    }
  }

  openLoginDiaglog() {
    let options = {
      panelClass:'mat-dialog',
      width:'100vw',
      maxWidth:'400px',
      autoFocus:false
    }
    this.dialog.open(AppLoginComponent,options);
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

}
