import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  IgxButtonModule,
          IgxDropDownModule,
          IgxInputGroupModule,
          IgxRippleModule,
          IgxIconModule,
          IgxToggleModule } from 'igniteui-angular';
import { GuidDropdownModule } from './components/drop-down/guid-dropdown.module';
import { HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { DropDownSample4Component } from './components/ig-dropdown/ig-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    DropDownSample4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    IgxButtonModule,
    IgxDropDownModule,
    IgxInputGroupModule,
    IgxRippleModule,
    IgxIconModule,
    IgxToggleModule,
    GuidDropdownModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
