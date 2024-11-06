import { Component } from '@angular/core';
import { IPelicula } from '../iPelicula';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {
  peliculas: IPelicula[] = [
    {id:1, titulo: 'El Padrino', director: 'Francis Ford Coppola', anio: 1972, imagen: 'elPadrino.jpg', sinopsis:"Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York en los años 40. El hombre tiene cuatro hijos: Connie, Sonny, Fredo y Michael, que no quiere saber nada de los negocios sucios de su padre. Cuando otro capo, Sollozzo, intenta asesinar a Corleone, empieza una cruenta lucha entre los distintos clanes.", puntuacion: 9},
    {id:2, titulo: 'El Señor de los Anillos: La Comunidad del Anillo', director: 'Peter Jackson', anio: 2001, imagen: 'elSeñorDeLosAnillos.jpg', sinopsis:"En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.", puntuacion: 8 },
    {id:3, titulo: 'Forrest Gump', director: 'Robert Zemeckis', anio: 1994, imagen: 'forrestGump.jpg', sinopsis:"Sentado en un banco en Savannah, Georgia, Forrest Gump espera al autobús. Mientras éste tarda en llegar, el joven cuenta su vida a las personas que se sientan a esperar con él. Aunque sufre un pequeño retraso mental, esto no le impide hacer cosas maravillosas. Sin entender del todo lo que sucede a su alrededor, Forrest toma partido en los eventos más importantes de la historia de los Estados Unidos.", puntuacion: 8 },
  ];

}



