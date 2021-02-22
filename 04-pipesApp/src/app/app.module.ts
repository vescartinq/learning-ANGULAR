import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ButtonModule, CardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
