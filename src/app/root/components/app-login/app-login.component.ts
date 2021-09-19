import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {

  constructor() { }
  public isloginMode:boolean;
  public isProcessing:boolean;
  ngOnInit(): void {
    this.isloginMode = true;
    this.isProcessing = false;
  }
  switchstate() {
    this.isloginMode = !this.isloginMode;
  }
  processData() {
    this.isProcessing = true;
  }
}
