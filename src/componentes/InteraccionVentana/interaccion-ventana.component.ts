import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-InteraccionVentana',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana.component.html',
  styleUrl: './interaccion-ventana.component.css'
})
export class InteraccionVentanaComponent implements OnDestroy {

  // Es la nueva ventana que se abre cuando pulsamos el boton
  // tiene el | null porque cuando la ventana no está abierta el valor es null
  ventana: Window | null = null;
  resolucion: string = '';

  // el window.open se encarga de abrir la página
  abrirVentana(){
    this.ventana = window.open('', '', 'width=400,height=400');
    this.actualizarResolucion();
    // Registra un evento que se ejecuta cada vez que la ventana cambie de tamaño
    this.ventana?.addEventListener('resize', this.actualizarResolucion.bind(this));
  }


  actualizarResolucion(){
    if (this.ventana){
      this.resolucion = `Ancho: ${this.ventana.innerWidth}, Alto: ${this.ventana.innerHeight}`;
    }
  }

  // Elimina el evento de redimensión cuando el componente se destruye
  ngOnDestroy() {
    this.ventana?.removeEventListener('resize', this.actualizarResolucion.bind(this));
  }
}
