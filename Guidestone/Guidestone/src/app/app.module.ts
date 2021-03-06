import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { HowFeelingPageComponent } from './how-feeling-page/how-feeling-page.component';
import { WhatActivityPageComponent } from './what-activity-page/what-activity-page.component';
import { CalendarComponent } from './calendar/calendar.component';
import { AchievementComponent } from './achievement/achievement.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    HowFeelingPageComponent,
    WhatActivityPageComponent,
    CalendarComponent,
    AchievementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
