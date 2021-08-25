import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppFaqComponent } from './app-faq/components/app-faq.component';
import { AppHomeComponent } from './app-home/components/app-home/home.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {
    path:'home',
    loadChildren: () => import('./app-home/app-home.module').then( m=> m.AppHomeModule )
  },
  { 
    path:'faq',
    loadChildren: () => import('./app-faq/app-faq.module').then( m => m.AppfaqModule ) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
