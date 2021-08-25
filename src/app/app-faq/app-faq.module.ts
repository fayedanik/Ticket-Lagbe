
import { NgModule  } from "@angular/core";
import { AppFaqComponent } from "./components/app-faq.component";
import { AppFaqRoutingModule } from "./app-faq.routing";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
    declarations:[
        AppFaqComponent
    ],
    imports:[
        AppFaqRoutingModule,
        FlexLayoutModule,
        MatExpansionModule
    ],
    exports:[]
})
export class AppfaqModule {

}