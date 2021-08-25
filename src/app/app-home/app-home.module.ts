import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HowtobuyComponent } from "../app-howtobuy/howtobuy.component";
import { AppHomeRoutingModule } from "../app-home/app-home.routing";
import { CarouselComponent } from "../carousel/carousel.component";
import { MaterialModule } from "../material.module";
import { AppHomeComponent } from "./components/app-home/home.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbCarouselModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";




@NgModule({
    declarations:[
        AppHomeComponent,
        CarouselComponent,
        HowtobuyComponent
    ],
    imports:[
        FlexLayoutModule,
        CommonModule,
        MaterialModule,
        AppHomeRoutingModule,
        NgbModule,
        NgbCarouselModule
    ],
    exports:[],
    providers:[]
})

export class AppHomeModule {

}