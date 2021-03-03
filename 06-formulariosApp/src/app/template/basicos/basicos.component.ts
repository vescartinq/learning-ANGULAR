import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent implements OnInit {
  // Informar a Angular que #miFormulario es de tipo NgForm
  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'PS5',
    precio: 10,
    existencias: 10,
  };

  constructor() {}

  ngOnInit(): void {}

  nombreValido(): boolean {
    return (
      this.miFormulario?.controls.producto?.invalid &&
      this.miFormulario?.controls.producto?.touched
    );
  }

  precioValido(): boolean {
    // el campo ha sido tocado y existe algún valor
    return (
      this.miFormulario?.controls.precio?.touched &&
      this.miFormulario?.controls.precio?.value < 0
    );
  }

  // guardar( miFormulario: NgForm ) {
  guardar() {
    // console.log( this.miFormulario );
    console.log('Posteo correcto');

    // this.miFormulario.resetForm() -> Limpia el formulario y lo deja vacio
    this.miFormulario.resetForm({
      producto: 'Algo',
      precio: 0,
      existencias: 0,
    });
  }
}
