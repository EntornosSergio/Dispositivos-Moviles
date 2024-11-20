import { Component, OnInit } from '@angular/core';
import { IMensaje } from '../Interfaces/IMensaje';
import { ServiciosService } from '../../Servicios/servicios.service';

@Component({
  selector: 'app-mensaje',
  standalone: false,
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent implements OnInit {

  list: IMensaje[]=[];

  constructor(private servicioMensajes: ServiciosService) {}

  ngOnInit(): void {
    this.servicioMensajes.getMensajes().subscribe({
      next: (mensaje) => this.list = mensaje,
      error: (error) => console.error('Error en cargar los mensajes', error)
    });
  }
}
