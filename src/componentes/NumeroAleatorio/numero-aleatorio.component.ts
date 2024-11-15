import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-NumeroAleatorio',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './numero-aleatorio.component.html',
  styleUrl: './numero-aleatorio.component.css'
})
export class NumeroAleatorioComponent {

  cantidad: number = 0;
  numerosGenerados: number[] = [];

  generarNumero(){
    this.numerosGenerados = [];
    for(let i = 0; i < this.cantidad; i++){
      if (this.cantidad < 0){

      }
      const numero = Math.floor(Math.random()*100) + 1;
      this.numerosGenerados.push(numero);
    }
  }



}
