import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { HerofullscreenComponent } from './components/herofullscreen/herofullscreen.component';

import { CurrencyPipe } from './pipes/currency.pipe';

import { HttpClientModule } from '@angular/common/http';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { StationsComponent } from './components/stations/stations.component';
import { StationsformComponent } from './components/stationsform/stationsform.component';

// Register the localization
registerLocaleData(localePt, 'fr-FR');

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HerofullscreenComponent,
    CurrencyPipe,
    StationsComponent,
    StationsformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    },
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
