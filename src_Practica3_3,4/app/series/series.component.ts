import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ISerie } from './ISerie';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  list1:ISerie[]=[];


  constructor(){
    this.list1=[
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "Breaking Bad",
        temporadas: 5,
        sinopsis: "Un profesor de química de secundaria se convierte en fabricante de metanfetaminas tras ser diagnosticado con cáncer, con el fin de asegurar el futuro financiero de su familia.",
        plataforma: "Netflix"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "Stranger Things",
        temporadas: 4,
        sinopsis: "Un grupo de niños descubre secretos sobrenaturales en su pequeño pueblo, incluyendo experimentos gubernamentales y la existencia de un siniestro mundo alterno.",
        plataforma: "Netflix"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "Game of Thrones",
        temporadas: 8,
        sinopsis: "En los Siete Reinos de Westeros, varias familias nobles luchan por el control del Trono de Hierro mientras se avecina una amenaza sobrenatural en el Norte.",
        plataforma: "HBO Max"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "The Mandalorian",
        temporadas: 3,
        sinopsis: "Un cazarrecompensas solitario navega los confines de la galaxia en busca de un trabajo, pero su vida cambia al descubrir a un niño especial con habilidades misteriosas.",
        plataforma: "Disney+"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "Chernobyl",
        temporadas: 1,
        sinopsis: "Una recreación dramática del desastre nuclear de Chernobyl en 1986, y los sacrificios heroicos de los hombres y mujeres que intentaron mitigar la catástrofe.",
        plataforma: "HBO Max"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "The Boys",
        temporadas: 3,
        sinopsis: "En un mundo donde los superhéroes abusan de sus poderes, un grupo de vigilantes conocidos como 'The Boys' lucha por exponer la verdad y detenerlos.",
        plataforma: "Amazon Prime Video"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "The Witcher",
        temporadas: 3,
        sinopsis: "Geralt de Rivia, un cazador de monstruos, intenta encontrar su lugar en un mundo donde los humanos pueden ser más crueles que las bestias.",
        plataforma: "Netflix"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "Friends",
        temporadas: 10,
        sinopsis: "Un grupo de amigos navega por las alegrías y dificultades de la vida adulta en Nueva York, enfrentando el amor, el trabajo y la amistad.",
        plataforma: "HBO Max"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "The Office",
        temporadas: 9,
        sinopsis: "Un falso documental que sigue las vidas de los empleados de la oficina de Dunder Mifflin en Scranton, Pennsylvania, mientras enfrentan situaciones laborales absurdas.",
        plataforma: "Peacock"
      },
      {
        caratula: "https://m.media-amazon.com/images/M/MV5BMzU5ZGYzNmQtMTdhYy00OGRiLTg0NmQtYjVjNzliZTg1ZGE4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        titulo: "Peaky Blinders",
        temporadas: 6,
        sinopsis: "La historia de la familia Shelby, una banda criminal que opera en Birmingham después de la Primera Guerra Mundial, y su ascenso al poder.",
        plataforma: "Netflix"
      }
    ]
  }

}
