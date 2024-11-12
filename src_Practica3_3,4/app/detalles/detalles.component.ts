import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPeliculas } from '../peliculas/IPelicula'; // Asegúrate de que esta ruta sea correcta

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css'] // Cambia "styleUrl" a "styleUrls"
})
export class DetallesComponent implements OnInit {

  pelicula!: IPeliculas; // Usa "!" para indicar que se inicializará más tarde

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const index = +params['index']; // Obtener el índice de la ruta
    });
  }
}
