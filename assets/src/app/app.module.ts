import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app/app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
//import { HeroesComponent }      from './heroes/heroes.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
//import { HeroService }          from './hero/hero.service';
//import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { SendSMSComponent }  from './send-sms/send-sms.component';

import { SMSService }  from './sms/sms.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SendSMSComponent
  ],
  providers: [ SMSService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
