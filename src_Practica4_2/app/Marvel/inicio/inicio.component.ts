import { Component } from '@angular/core';
import { IInicio } from '../Interfaces/IInicio';
import { ServiciosService } from '../Servicios/servicios.service';
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  lista:IInicio[]=[];

  constructor(private servicioMensajes: ServiciosService) {}

   ngOnInit(): void {
    this.servicioMensajes.getMensajes().subscribe({
      next: (inicio) => this.lista = inicio,
      error: (error) => console.error('Error en cargar los mensajes', error)
    });
  }
}
