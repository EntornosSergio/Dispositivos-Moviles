import { Component, OnInit } from '@angular/core';
import { ISerie } from '../iSerie';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contenido-serie',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contenido-serie.component.html',
  styleUrl: './contenido-serie.component.css'
})
export class ContenidoSerieComponent implements OnInit {

  serie: ISerie | undefined;

  series: ISerie[] = [
    {id:1, titulo: 'Vikingos',plataforma:"Netflix", temporadas: 6, imagen: 'vikingos.png', sinopsis:"El programa retrata a Ragnar como un granjero que ha conseguido construir barcos revolucionarios con instrumentos de navegación también revolucionarios. Con ellas puede hacer exitosas incursiones en Inglaterra, alcanzar la fama y convertirse en un rey escandinavo, con la ayuda de su familia y sus guerreros."},
    {id:2, titulo: 'Breaking Bad', plataforma:"Netflix", temporadas: 5, imagen: 'breaking-bad.jpg', sinopsis:"Un profesor de química con cáncer terminal se asocia con un exalumno suyo para fabricar y vender metanfetamina a fin de que su familia no pase apuros económicos. Ve todo lo que quieras. Breaking Bad: obtuvo 16 premios Emmy, incluyendo cuatro al mejor actor en una serie dramática para Bryan Cranston."},
    {id:3, titulo: 'Peaky Blinders', plataforma:"Netflix", temporadas: 6, imagen: 'peaky-blinders.jpg', sinopsis:"Birmingham, 1939. Thomas Shelby es el violento líder de una conocida banda; un jefe del crimen organizado dispuesto a llegar a lo más alto sin importar el precio. Ve todo lo que quieras. Ganó un BAFTA a mejor serie dramática; Cillian Murphy y Charlie Murphy los IFTA a mejor actor y mejor actriz de reparto."},
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    let numericId = id ? Number(id) : null; // Convertir a número, manejar null

    if (numericId !== null && !isNaN(numericId) && numericId > 0 && numericId <= this.series.length) {
      this.serie = this.series[numericId - 1]; // Restar 1 para el índice
    } else {
      this.serie = undefined; 
    }
  }
}
