import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, PrimeNgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
