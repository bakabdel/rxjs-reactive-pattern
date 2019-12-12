import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserEventExperementsComponent } from './browser-event-experements/browser-event-experements.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserEventExperementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
