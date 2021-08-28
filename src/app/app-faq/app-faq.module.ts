
import { NgModule  } from "@angular/core";
import { AppFaqComponent } from "./components/app-faq.component";
import { AppFaqRoutingModule } from "./app-faq.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from "@angular/common";
@NgModule({
    declarations:[
        AppFaqComponent
    ],
    imports:[
        AppFaqRoutingModule,
        FlexLayoutModule,
        MatExpansionModule,
        CommonModule
    ],
    exports:[]
})
export class AppfaqModule {

}