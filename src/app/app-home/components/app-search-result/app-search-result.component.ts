import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { BusInfo } from '../../Interfaces/bus-info.interface';
import { BusinfoService } from '../../services/businfo.service';
import { AppViewSeatsComponent } from '../app-view-seats/app-view-seats.component';

@Component({
  selector: 'app-app-search-result',
  templateUrl: './app-search-result.component.html',
  styleUrls: ['./app-search-result.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px',minHeight: '0'})),
      state('expanded', style({height:'*'})),
      transition('expanded <=> collapsed',animate('225ms cubic-bezier(0.4,0.0,0.2,1)'))
    ])
  ]
})
export class AppSearchResultComponent implements OnInit,AfterViewInit {

  screensize:string = 'lg';
  mediaSub:Subscription;
  expanded:boolean = true;
  @ViewChild(MatSort) sort:MatSort; 
  expandedElement:BusInfo | null;
  tableData:BusInfo[] = this.businfo.getBusInfo();
  dataSource:MatTableDataSource<BusInfo>;
  headerColumns: string[] = ['operatorName','departureTime','arrivalTime','availableSeats','fare'];
  displayedColumns: string[] = ['Operators','Dep. Time','Arr. Time','Seats Available','Fare'];
  invalidRequest:boolean = false;

  fromcity:string;
  tocity:string;

  constructor( public mediaobserver:MediaObserver, private businfo:BusinfoService, public dialog:MatDialog, private router:Router, private route:ActivatedRoute) { 
    this.dataSource = new MatTableDataSource(this.tableData);
  }

  ngOnInit(): void {
    this.tableData = this.businfo.getBusInfo();
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (res:MediaChange) => {
        this.screensize = res.mqAlias;
        if ( this.screensize==='sm' || this.screensize==='xs' ) {
          this.expanded = false;
        }
        else {
          this.expanded = true;
        }
      }
    );

    this.route.queryParams.subscribe(
      (params:Params) => {
        if( params.fromcity != undefined && params.tocity !=undefined && params.dateofjourney!=undefined && params.retofjourney!=undefined ) {
          this.invalidRequest = false;
        } else {
          this.invalidRequest = true;
        }
      }
    );
  }

  showseat(index:number) {
    console.log(index);
    let options = {
      panelClass:'mat-dialog-seat-cotainer',
      width:'100vw',
      maxWidth:'800px',
      autoFocus:false
    }
    this.dialog.open(AppViewSeatsComponent,options);
  }
  onSubmit() {
    this.router.navigate(['search/bus'],{queryParams:{fromcity:'fromcity',tocity:'tocity',dateofjourney:'22-01-1998',retofjoureny:'23-09-2021'}});
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

}
