import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IPeliculas } from './IPelicula';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent {

  list:IPeliculas[]=[];

  constructor(){
    this.list=[
      {
        caratula: "Spider-Man",
        titulo: "Spider-Man: No Way Home",
        director: "Jon Watts",
        year: 2021,
        image: "https://es.web.img2.acsta.net/pictures/21/12/01/12/07/0243323.jpg",
        sinopsis: "Tras descubrirse la identidad secreta de Peter Parker como Spider-Man, la vida del joven se vuelve una locura. Peter le pide ayuda al Doctor Strange para revertir la situación, pero algo sale mal y provoca una fractura en el multiverso.",
        puntuacion: 9
      },
      {
        caratula: "Oppenheimer",
        titulo: "Oppenheimer",
        director: "Christopher Nolan",
        year: 2023,
        image: "https://pics.filmaffinity.com/Oppenheimer-828933592-mmed.jpg",
        sinopsis: "La historia del científico estadounidense J. Robert Oppenheimer y su papel en el desarrollo de la bomba atómica durante la Segunda Guerra Mundial.",
        puntuacion: 9.5
      },
      {
        caratula: "Inception",
        titulo: "Inception",
        director: "Christopher Nolan",
        year: 2010,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        sinopsis: "Un ladrón experto en el arte de la extracción, consistente en robar secretos valiosos del interior del subconsciente durante el estado del sueño.",
        puntuacion: 8.8
      },
      {
        caratula: "Barbie",
        titulo: "Barbie",
        director: "Greta Gerwig",
        year: 2023,
        image: "https://www.ecartelera.com/carteles/11500/11597/028_p.jpg",
        sinopsis: "Después de ser expulsada de Barbieland por no ser una muñeca que represente la perfección, Barbie parte hacia el mundo real donde descubre las alegrías y dificultades de ser humano.",
        puntuacion: 8
      },
      {
        caratula: "Interstellar",
        titulo: "Interstellar",
        director: "Christopher Nolan",
        year: 2014,
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        sinopsis: "Un grupo de exploradores espaciales emprende una misión interestelar para encontrar un nuevo hogar para la humanidad, que enfrenta una crisis de supervivencia en la Tierra.",
        puntuacion: 9.2
      },
      {
        caratula: "Avatar",
        titulo: "Avatar: The Way of Water",
        director: "James Cameron",
        year: 2022,
        image: "https://m.media-amazon.com/images/I/71s3cEqEZTL._AC_UF894,1000_QL80_.jpg",
        sinopsis: "Jake Sully y Neytiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones de Pandora cuando una antigua amenaza reaparece.",
        puntuacion: 8.5
      },
      {
        caratula: "Dune",
        titulo: "Dune",
        director: "Denis Villeneuve",
        year: 2021,
        image: "https://pics.filmaffinity.com/Dune-209834814-large.jpg",
        sinopsis: "El hijo de una familia noble trata de vengarse de la muerte de su padre y al mismo tiempo salvar un planeta rico en especias que le han encomendado proteger.",
        puntuacion: 8.7
      },
      {
        caratula: "Joker",
        titulo: "Joker",
        director: "Todd Phillips",
        year: 2019,
        image: "https://pics.filmaffinity.com/Joker-790658206-large.jpg",
        sinopsis: "La historia de origen del archienemigo de Batman, que sigue a Arthur Fleck, un hombre ignorado por la sociedad cuya frustración y desesperación lo llevan por un camino de violencia y caos.",
        puntuacion: 8.9
      },
      {
        caratula: "The Shawshank Redemption",
        titulo: "The Shawshank Redemption",
        director: "Frank Darabont",
        year: 1994,
        image: "https://m.media-amazon.com/images/I/717W9DCnyzL._AC_UF894,1000_QL80_.jpg",
        sinopsis: "Un banquero es encarcelado por un crimen que no cometió. Dentro de la cárcel, forja una amistad con otro prisionero mientras ambos luchan por mantener la esperanza.",
        puntuacion: 9.3
      },
      {
        caratula: "The Godfather",
        titulo: "The Godfather",
        director: "Francis Ford Coppola",
        year: 1972,
        image: "https://m.media-amazon.com/images/M/MV5BYTJkNGQyZDgtZDQ0NC00MDM0LWEzZWQtYzUzZDEwMDljZWNjXkEyXkFqcGc@._V1_.jpg",
        sinopsis: "La saga épica de la familia mafiosa Corleone, centrada en la transición de poder de Vito Corleone a su hijo Michael.",
        puntuacion: 9.2
      }
    ]
  }
  
}
