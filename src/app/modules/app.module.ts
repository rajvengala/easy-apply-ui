import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from '../components/root/app.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {EasyApplyMaterialModule} from "./easy-apply-material.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppRoutingModule} from "./easy-apply-routing.module";
import {GetDetailsService} from "../services/get-details.service";
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    EasyApplyMaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [
    GetDetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
