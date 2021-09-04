import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class AppHomeComponent implements OnInit {
  
  screensize:string = 'lg';
  mediaSub:Subscription;
  constructor( public mediaobserver: MediaObserver ) { }
  public mynumber:any[] = [0,1,2,3,4,5];
  
  ngOnInit(): void {
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (res:MediaChange) => {
        this.screensize = res.mqAlias;
      }
    );
  }

}
