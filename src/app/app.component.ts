import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaHoraComponent} from '../componentes/FechaHoraComponent/fecha-hora.component';
import {NumeroAleatorioComponent} from '../componentes/NumeroAleatorio/numero-aleatorio.component';
import {NavegacionHistorialComponent} from '../componentes/NavegacionHistorial/navegacion-historial.component';
import {InteraccionVentanaComponent} from '../componentes/InteraccionVentana/interaccion-ventana.component';
import {InteraccionVentana2Component} from '../componentes/InteraccionVentana2/interaccion-ventana2.component';
import {ManipulacionCookiesComponent} from '../componentes/ManipulacionCookies/manipulacion-cookies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaHoraComponent, NumeroAleatorioComponent, NavegacionHistorialComponent, InteraccionVentanaComponent, InteraccionVentana2Component, ManipulacionCookiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejercicios1';
}
