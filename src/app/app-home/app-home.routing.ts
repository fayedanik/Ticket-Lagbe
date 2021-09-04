import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppHomeComponent } from './components/app-home/home.component'
import { AppSearchResultComponent } from "./components/app-search-result/app-search-result.component";

const routes:Routes = [
    {
        path:'',
        component:AppHomeComponent,
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})

export class AppHomeRoutingModule {

}