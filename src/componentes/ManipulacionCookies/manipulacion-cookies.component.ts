import {Component, OnInit} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-ManipulacionCookies',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './manipulacion-cookies.component.html',
  styleUrl: './manipulacion-cookies.component.css'
})
export class ManipulacionCookiesComponent implements OnInit{
  // Inicialmente es null pero contiene el nombre del usuario almacenado en las cookies
  nombreUsuario: string | null = null;

  ngOnInit(){
    //Intenta obtener el nombre de usuario asociado a la cookie
    // this.nombreUsuario = this.obtenerCookie('nombreUsuario');
    // Si no tiene nombre de usuario le pide al usuario que ingrese uno
    if(!this.nombreUsuario){
      this.nombreUsuario = prompt("Introduce tu nombre: ");
      if (this.nombreUsuario){
        // Se guarda el nombre en una cookie con la duración de 1 dia
        this.establecerCookie('nombreUsuario', this.nombreUsuario, 1);
      }
    }
  }

  establecerCookie(nombre: string, valor: string, dias: number){
    // Establece una variable de fecha
    const fecha = new Date();
    // A la fecha actual le suma 1 dia en milisegundos
    fecha.setTime(fecha.getTime()+ (dias * 24 * 60 * 1000));
    // Es una cadena de cuando expira la cookie en el formato requerido por el navegador
    const expira = "expires=" + fecha.toUTCString();
    // Finalmente se define la cookie con el nombre, el valor y la fecha de expliracion
    document.cookie = `${nombre}=${valor};${expira};path=/`;
  }

}
