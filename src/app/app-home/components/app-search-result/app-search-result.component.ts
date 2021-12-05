import { animate, state, style, transition, trigger } from '@angular/animations';
import { DatePipe } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
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
  dayName: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saterday'];
  
  isloading:boolean = true;
  invalidRequest:boolean = false;

  fromcity:string;
  tocity:string;
  dateofjourney:string;
  retofjourney:string;
  currentDay:number = -1;

  modifiedusersearchForm:FormGroup;

  constructor( 
    public mediaobserver:MediaObserver, 
    private businfo:BusinfoService, 
    public dialog:MatDialog, 
    private router:Router, 
    private route:ActivatedRoute,
    private fb:FormBuilder) { 
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

    this.modifiedusersearchForm = this.fb.group({
      fromcity:['',Validators.required],
      tocity:['',Validators.required],
      dateofjourney:['',Validators.required]
    });

    this.route.queryParams.subscribe(
      (params:Params) => {
        if( params.fromcity != undefined && params.tocity !=undefined && params.dateofjourney!=undefined && params.retofjourney!=undefined ) {
          this.invalidRequest = false;
          this.fromcity = params.fromcity;
          this.tocity = params.tocity;
          this.dateofjourney = params.dateofjourney;
          this.currentDay = new Date(this.dateofjourney).getDay();
          this.modifiedusersearchForm.setValue({
            fromcity:this.fromcity,
            tocity:this.tocity,
            dateofjourney:this.dateofjourney
          });
          
        } else {
          this.invalidRequest = true;
        }
      }
    );

    // console.log(this.fromcity);
    // console.log(this.tocity);
    // console.log(this.dateofjourney);
    // console.log(this.currentDay);

    setTimeout(()=>{
      this.isloading = false;
      console.log(this.isloading);
    },3000);

    //this.isloading = false;

  }

  getminvaliddate() {
    var currentdate = new Date();
    return currentdate;
  }

  getmaxvaliddate() {
    var currentdate = new Date();
    currentdate.setDate(currentdate.getDate()+5);
    return currentdate;
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
    
    this.fromcity = this.modifiedusersearchForm.value["fromcity"];
    this.tocity = this.modifiedusersearchForm.value["tocity"];
    this.dateofjourney = new DatePipe('en-US').transform(this.modifiedusersearchForm.value["dateofjourney"],'yyyy-MM-dd'); 
    this.retofjourney = new DatePipe('en-US').transform(this.modifiedusersearchForm.value["retofjourney"],"yyyy-MM-dd");
    if( !this.retofjourney ) {
      this.retofjourney = '';
    }
    this.router.navigate(['search/bus'],{queryParams:{fromcity:this.fromcity,tocity:this.tocity,dateofjourney:this.dateofjourney,retofjourney:this.retofjourney}});
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
  }

}
