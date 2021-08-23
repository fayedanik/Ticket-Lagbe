import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})



export class CarouselComponent implements OnInit {

  constructor( config:NgbCarouselConfig ) { 
    config.interval = 5000;
    config.animation = true;
  }

  images = ['./banners/banner1.jpg','./banners/banner2.jpg','./banners/banner3.jpg'];
  
  ngOnInit(): void {
    
  }

}
