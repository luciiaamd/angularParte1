import { Component } from '@angular/core';

@Component({
  selector: 'app-NavegacionHistorial',
  standalone: true,
  imports: [],
  templateUrl: './navegacion-historial.component.html',
  styleUrl: './navegacion-historial.component.css'
})
export class NavegacionHistorialComponent {

  volverAtras(){
    window.history.back();
  }

  irAdelante(){
    window.history.forward();
  }

}
