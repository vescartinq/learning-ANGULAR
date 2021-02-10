import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent], //los componentes a trabajar
  exports: [ListadoComponent], //lo que vamos a mostrar en el html
  imports: [CommonModule], //modulos necesarios
})
export class HeroesModule {}
