import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HowtobuyComponent } from "../app-howtobuy/howtobuy.component";
import { AppHomeRoutingModule } from "../app-home/app-home.routing";
import { CarouselComponent } from "../carousel/carousel.component";
import { MaterialModule } from "../material.module";
import { AppHomeComponent } from "./components/app-home/home.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbCarouselModule, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppSearchComponent } from './components/app-search/app-search.component';
import { AppSearchResultComponent } from './components/app-search-result/app-search-result.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from "@angular/material/sort";
import { AppViewSeatsComponent } from "./components/app-view-seats/app-view-seats.component";

@NgModule({
    declarations:[
        AppHomeComponent,
        CarouselComponent,
        HowtobuyComponent,
        AppSearchComponent,
        AppSearchResultComponent,
        AppViewSeatsComponent
    ],
    imports:[
        FlexLayoutModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialModule,
        AppHomeRoutingModule,
        NgbModule,
        NgbCarouselModule,
        MatAutocompleteModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatExpansionModule,
        MatTableModule,
        MatSortModule
    ],
    exports:[]
})

export class AppHomeModule {

}