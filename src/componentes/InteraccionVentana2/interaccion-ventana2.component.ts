import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-InteraccionVentana2',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana2.component.html',
  styleUrl: './interaccion-ventana2.component.css'
})
export class InteraccionVentana2Component implements OnDestroy {

  ventana: Window | null = null;

  abrirVentana(){
    this.ventana = window.open('', '', 'width=400, heigth=400');
  }

  moverVentana(direccion: string){
    if (this.ventana){
      switch (direccion){
        case 'arriba':
          this.ventana.moveBy(0, -100);
          break;
        case 'abajo':
          this.ventana.moveBy(0, 100);
          break;
        case 'izquierda':
          this.ventana.moveBy(-100, 0);
          break;
        case 'derecha':
          this.ventana.moveBy(100, 0);
          break;
      }
    }
  }

  ngOnDestroy() {
    this.ventana?.close();
  }
}
