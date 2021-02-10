import { CommonModule } from '@angular/common';
import { ngModuleJitUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';

import { ContadorComponent } from './contador/contador.component';

@NgModule({
  declarations: [ContadorComponent],
  exports: [ContadorComponent],
})
export class ContadorModule {}
