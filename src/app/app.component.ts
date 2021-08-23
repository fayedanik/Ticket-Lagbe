import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'online-bus-management-system';

  mediaSub:Subscription;
  screensize: string;
  @ViewChild('sidenav') sideNav: MatSidenav;
  constructor( public mediaobserver: MediaObserver ) { }

  ngOnInit() {
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (res:MediaChange) => {
        this.screensize = res.mqAlias;
        console.log(this.screensize);
        if( this.screensize==='lg' || this.screensize==='xl' ) this.sideNav.close();
      }
    );
  }
  onCloseSidenav() {
    this.sideNav.close();
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }
}
