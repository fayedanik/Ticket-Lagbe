import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from './root/components/app-header/app-header/app-header.component';
import { AppFooterComponent } from './root/components/app-footer/app-footer/app-footer.component';
import { MaterialModule } from './material.module';
import { AppFeatureComponent } from './app-feature/components/app-feature/app-feature.component';
import { AppLoginComponent } from './root/components/app-login/app-login.component';
import { AppLoadingComponent } from './root/components/app-loading/app-loading.component';
import { AppIconsnackbarComponent } from './app-iconsnackbar/app-iconsnackbar.component';




@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppFeatureComponent,
    AppLoginComponent,
    AppLoadingComponent,
    AppIconsnackbarComponent
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
