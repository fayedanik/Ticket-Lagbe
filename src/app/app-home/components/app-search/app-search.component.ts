import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { startWith, map, filter } from 'rxjs/operators';
import { MatDatepicker } from '@angular/material/datepicker';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CityNameService } from '../../services/cityname.service';


@Component({
  selector: 'app-search',
  templateUrl: './app-search.component.html',
  styleUrls: ['./app-search.component.scss']
})
export class AppSearchComponent implements OnInit {

  screensize:string = 'lg';
  mediaSub:Subscription;
  usersearchForm:FormGroup;
  filteredcitynamefordeparture:Observable<string[]>;
  filteredcitynamefordestination:Observable<string[]>;
  cityName:string[];
  @ViewChild('focustocity',{static:true}) focustocity:ElementRef;
  @ViewChild('picker',{static:true}) datepicker:MatDatepicker<Date>;

  constructor( public mediaobserver:MediaObserver,private router:Router,private route:ActivatedRoute, private fb:FormBuilder, private _snackbar:MatSnackBar,private citynameService: CityNameService ) { }

  ngOnInit(): void {
    this.cityName = this.citynameService.getcityName();
    this.cityName.sort();
    this.mediaSub = this.mediaobserver.media$.subscribe(
      (res:MediaChange) => {
        this.screensize = res.mqAlias;
      }
    );

    this.usersearchForm = this.fb.group({
      fromcity:['',Validators.required],
      tocity:['',Validators.required],
      dateofjourney:['',Validators.required],
      retofjourney:['']
    });

    this.filteredcitynamefordeparture = this.usersearchForm.get('fromcity').valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.filteredcitynamefordestination = this.usersearchForm.get('tocity').valueChanges.pipe(
      startWith(''),
      map(value=> this._filter(value))
    );
  }

  private _filter(value:string):string[] {
    const filtervalue = value.toLowerCase();
    if( value.length<3 ) return [];
    //return this.cityName.filter( option => option.toLowerCase().includes(filtervalue));
    return this.cityName.filter( option => option.toLowerCase().startsWith(filtervalue));

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

  onSubmit() {
    var fromcity = this.usersearchForm.value["fromcity"];
    var tocity = this.usersearchForm.value["tocity"];
    var fromdate = new DatePipe('en-US').transform(this.usersearchForm.value["dateofjourney"],'dd-MM-yyyy');
    var retdate = new DatePipe('en-US').transform(this.usersearchForm.value["retofjourney"],'dd-MM-yyyy');
    if( !retdate ) {
      retdate = '';
    }
    if( this.cityName.indexOf(fromcity)!=-1 && this.cityName.indexOf(tocity)!=-1 ) {
      this.router.navigate(['search/bus'],{queryParams:{fromcity:fromcity,tocity:tocity,dateofjourney:fromdate,retofjourney:retdate}});
    }
    else {
      this._snackbar.open('No city Found','x',{
        duration: 3000,
        panelClass : 'notify-alert'
      });
    }
    
  }
  goto(num:number) {
    if( num===1 ) {
      if( !this.usersearchForm.value["tocity"] ) {
          this.focustocity.nativeElement.focus();
      }
    }
    if( num===2 ) {
      if( !this.usersearchForm.value["dataofjourney"] ) {
        this.datepicker.open();
      } 
    }
  }
}
