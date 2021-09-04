import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppSearchResultComponent } from './app-home/components/app-search-result/app-search-result.component';


const routes: Routes = [
  
  {
    path:'',
    loadChildren: () => import('./app-home/app-home.module').then( m => m.AppHomeModule)
  },
  { 
    path:'faq',
    loadChildren: () => import('./app-faq/app-faq.module').then( m => m.AppfaqModule ) 
  },
  {
    path:'search/bus',
    component: AppSearchResultComponent
  },
  {
    path:'**',
    redirectTo:'',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
