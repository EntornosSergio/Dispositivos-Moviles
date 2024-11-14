import { Component,OnInit } from '@angular/core';
import { IPeliculas } from '../Interfaces/IPelicula';
import { ServiciosService } from '../../servicios/servicios.service';


@Component({
  selector: 'app-peliculas',
  standalone: false,
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})

export class PeliculasComponent implements OnInit {

  list: IPeliculas[] = [];

  constructor(private servicioPeliculas: ServiciosService) {}

  ngOnInit(): void {
    this.servicioPeliculas.getPeliculas().subscribe({
      next: (peliculas) => this.list = peliculas,
      error: (error) => console.error('Error al cargar películas', error)
    });
  }
}