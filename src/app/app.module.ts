import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDetailsComponent,
    QuoteDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
