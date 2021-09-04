import { Time } from "@angular/common";


export interface BusInfo {
    operatorName:string;
    departureTime:string;
    arrivalTime:string;
    startingPoint:string;
    endingPoint:string;
    availableSeats:number;
    fare:number;
} 