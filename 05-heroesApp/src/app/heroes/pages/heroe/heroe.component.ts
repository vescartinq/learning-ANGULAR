import { Component, Input, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroes.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [],
})
export class HeroeComponent implements OnInit {
  // activated Route para obtener params
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // obtener id del personaje
    this.activatedRoute.params.subscribe(({ id }) => console.log(id));
  }
}
