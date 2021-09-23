import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { locationTime } from '../../Interfaces/location-time.interface';

@Component({
  selector: 'app-app-view-seats',
  templateUrl: './app-view-seats.component.html',
  styleUrls: ['./app-view-seats.component.scss']
})
export class AppViewSeatsComponent implements OnInit {


  seatName:string[] = ['A','B','C','D','E','F','G','H'];
  occupiedSeats:string[];
  boardingPoints:locationTime[]=[];
  droppingPoints:locationTime[]=[];
  displayedColumns:string[] = ['location','time'];
  databoardingPointSource:MatTableDataSource<locationTime>;
  datadroppingPointSource:MatTableDataSource<locationTime>;

  constructor( private _snackbar: MatSnackBar ) { 
  }

  ngOnInit(): void {
    this.occupiedSeats = [];
    this.boardingPoints = [
      {location:'Gabtoli AC Counter',time:'04.30PM'},
      {location:'Arambagh Counter',time:'05.15PM'},
      {location:'Fokirapool B 4 Counter',time:'05.30PM'},
      {location:'Jatrabari Counter',time:'06.00PM'}
    ];
    this.droppingPoints = [
      {location:'Chakaria Bus Point',time:'05.30PM'},
      {location:'Cox\'sBazar Bus Point',time:'06.30PM'},
      {location:'Teknaf Bus Point',time:'08.30PM'}
    ];
    this.databoardingPointSource = new MatTableDataSource(this.boardingPoints);
    this.datadroppingPointSource = new MatTableDataSource(this.droppingPoints);
  }
  onClickselectSeat(seat:number) {
    var seatNum = "seat"+"-"+seat;
    var actualseatnum = this.seatName[seat%8] + (Math.trunc(seat/8)+1);
    //console.log(seatNum);
    let elem = document.getElementById(seatNum).classList;
    if( elem.contains("bg-selected") ) {
      elem.remove("bg-selected");
      var pos = this.occupiedSeats.indexOf(actualseatnum);
      if( pos>-1 ) {
        this.occupiedSeats.splice(pos,1);
      }
    } else {
      elem.add("bg-selected");
      if( this.occupiedSeats.length >=4 ) {
        this._snackbar.open('Maximum 4 seats can be selected at a time','x',{
          duration: 3000,
          panelClass : 'notify-alert'
        });
        elem.remove("bg-selected");
      } else {
        this.occupiedSeats.push(actualseatnum);
      }
      
    }
  }

}
