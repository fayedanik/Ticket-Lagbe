import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { startWith, map } from 'rxjs/operators';
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
  cityName:string[] = ['Badarganj','Bajitpur','Bandarban','Baniachang','Barisal','Bera','Bhairab Bazar' ,'Bhandaria','Bhatpara Abhaynagar','Bheramara','Bhola','Bogra','Burhanuddin','Char Bhadrasan','Chhagalnaiya','Chhatak','Chilmari','Chittagong','Comilla','Cox\'s Bazar','Dhaka','Dinajpur','Dohar','Faridpur','Fatikchari','Feni','Gafargaon','Gaurnadi','Habiganj','Hajiganj','Ishurdi','Jamalpur','Jessore','Jhingergacha','Joypur Hat','Kalia','Kaliganj','Kesabpur','Khagrachhari','Khulna','Kishorganj','Kushtia','Laksham','Lakshmipur','Lalmanirhat','Lalmohan','Madaripur','Manikchari','Mathba','Maulavi Bazar','Mehendiganj','Mirzapur','Morrelgonj','Muktagacha','Mymensingh','Nabinagar','Nagarpur','Nageswari','Nalchiti','Narail','Narayanganj','Narsingdi','Nawabganj','Netrakona','Pabna','Palang','Panchagarh','Par Naogaon','Parbatipur','Patiya','Phultala','Pirgaaj','Pirojpur','Raipur','Rajshahi','Ramganj','Rangpur','Raojan','Saidpur','Sakhipur','Sandwip','Sarankhola','Sarishabari','Satkania','Satkhira','Shahzadpur','Sherpur','Shibganj','Sirajganj','Sylhet','Chakaria','Tangail','Teknaf','Thakurgaon','Tungi','Tungipara','Uttar Char Fasson'];

  constructor( public mediaobserver:MediaObserver,private router:Router,private route:ActivatedRoute, private fb:FormBuilder ) { }

  ngOnInit(): void {
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
    return this.cityName.filter( option => option.toLowerCase().includes(filtervalue));
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
    if( this.cityName.indexOf(fromcity)!=-1 && this.cityName.indexOf(tocity)!=-1 ) {
      this.router.navigate(['search/bus'],{queryParams:{fromcity:fromcity,tocity:tocity,dateofjourney:fromdate,retofjoureny:retdate}});
    }
    else {
      window.alert("No city found");
    }
    
  }
}
