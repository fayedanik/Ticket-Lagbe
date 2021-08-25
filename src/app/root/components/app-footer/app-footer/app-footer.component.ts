import { Component, OnInit } from '@angular/core';
import { MediaChange,MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss']
})
export class AppFooterComponent implements OnInit {

  screensize:string = 'lg';
  mediaSub:Subscription;
  
  constructor( public mediaobserver: MediaObserver ) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaobserver.media$.subscribe(
      ( res:MediaChange ) => {
        this.screensize = res.mqAlias;
        //console.log(this.screensize);
      }
    );
  }

  getmargin() {
    if( this.screensize==='sm' || this.screensize==='xs' || this.screensize==='md' ) {
      return '70px';
    }
    else {
      return '150px';
    }
  }

}
