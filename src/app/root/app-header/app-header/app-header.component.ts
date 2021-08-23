import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  constructor( public mediaobserver: MediaObserver ) { }
  
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
      return '70px';
    }
    else {
      return '150px';
    }
  }

  ngOnDestroy() {
    this.mediaSub.unsubscribe();
  }

}
