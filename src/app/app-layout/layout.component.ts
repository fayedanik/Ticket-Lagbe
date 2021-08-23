import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  
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
