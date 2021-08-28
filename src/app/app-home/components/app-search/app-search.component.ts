import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {

  screensize:string = 'lg';
  mediaSub:Subscription;
  
  constructor( public mediaobserver:MediaObserver) { }

  ngOnInit(): void {
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (res:MediaChange) => {
        this.screensize = res.mqAlias;
      }
    );
  }

}
