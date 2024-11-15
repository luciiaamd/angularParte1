import { Component, OnInit } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-FechaHoraComponent',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './fecha-hora.component.html',
  styleUrl: './fecha-hora.component.css'
})
export class FechaHoraComponent implements OnInit{

  fechaActual: Date = new Date();
  private intervalo: any;

  ngOnInit(){
    this.iniciarReloj();
  }

  iniciarReloj() {
    this.intervalo = setInterval(() => {
      this.fechaActual = new Date();
    }, 1000);
  }



}
