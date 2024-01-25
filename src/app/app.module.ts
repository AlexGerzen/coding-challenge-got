import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { FrontPageComponent } from './front-page/front-page.component';
import { HousesComponent } from './houses/houses.component';
import { PersonsComponent } from './persons/persons.component';
import { QuotesComponent } from './quotes/quotes.component';
import { DialogHousesComponent } from './dialog-houses/dialog-houses.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogPersonsComponent } from './dialog-persons/dialog-persons.component';
import {MatIconModule} from '@angular/material/icon';






@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    HousesComponent,
    PersonsComponent,
    QuotesComponent,
    DialogHousesComponent,
    DialogPersonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
