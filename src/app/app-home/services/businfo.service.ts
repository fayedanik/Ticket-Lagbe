import { Injectable } from '@angular/core';

import { BusInfo } from '../Interfaces/bus-info.interface';

@Injectable({
  providedIn: 'root'
})

export class BusinfoService {

  constructor() { }
  businfoData:BusInfo[] = [
    {busUniqID:0,operatorName:'GreenLine',busId:'Gre-1122-AKA',busType:'Ac',departureTime:'11.45 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:34,fare:2000},
    {busUniqID:1,operatorName:'Hanif',busId:'Han-1221-BKA',busType:'Non Ac',departureTime:'11.45 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:35,fare:3000},
    {busUniqID:2,operatorName:'Shyamoli',busId:'Shy-2121-CKA',busType:'Non Ac',departureTime:'09.00 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:37,fare:5000},
    {busUniqID:3,operatorName:'London Express',busId:'Lon-3232-DKA',busType:'Ac',departureTime:'10.45 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:34,fare:3000},
    {busUniqID:4,operatorName:'GreenLine',busId:'Gre-1123-AKA',busType:'Ac',departureTime:'11.30 PM',arrivalTime:'04.40 AM',startingPoint:'Dhaka',endingPoint:'Cox\'sBazar',availableSeats:40,fare:1000}
  ];
  
  getBusInfo() {
    return this.businfoData;
  }
}
