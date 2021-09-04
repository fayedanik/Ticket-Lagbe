import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BusInfo } from '../../Interfaces/bus-info.interface';

@Component({
  selector: 'app-app-search-result',
  templateUrl: './app-search-result.component.html',
  styleUrls: ['./app-search-result.component.scss']
})
export class AppSearchResultComponent implements OnInit,AfterViewInit {

  screensize:string = 'lg';
  mediaSub:Subscription;
  exp1:boolean = true;
  @ViewChild(MatSort) sort:MatSort; 

  tableData:BusInfo[] = [
    {operatorName:'GreenLine',departureTime:'11.45 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:34,fare:2000},
    {operatorName:'Hanif',departureTime:'11.45 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:35,fare:3000},
    {operatorName:'Shyamoli',departureTime:'09.00 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:37,fare:5000},
    {operatorName:'London Express',departureTime:'10.45 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:34,fare:3000},
    {operatorName:'GreenLine',departureTime:'11.30 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:40,fare:1000}
  ];
  dataSource:MatTableDataSource<BusInfo>;
  displayedColumns: string[] = ['operatorName','departureTime','arrivalTime','availableSeats','fare'];
  constructor( public mediaobserver:MediaObserver ) { 
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngOnInit(): void {
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (res:MediaChange) => {
        this.screensize = res.mqAlias;
      }
    );
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

}
