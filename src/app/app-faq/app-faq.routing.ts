import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppFaqComponent } from "./components/app-faq.component";

const routes:Routes = [
    {
        path:'',
        component: AppFaqComponent,
        children:[]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppFaqRoutingModule {

}