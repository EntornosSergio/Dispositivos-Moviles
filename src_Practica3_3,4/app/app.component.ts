import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasComponent } from './pagina-web/peliculas/peliculas.component';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './pagina-web/series/series.component';
import { MenuComponent } from './pagina-web/menu/menu.component';
import { PaginaWebModule } from './pagina-web/pagina-web.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PaginaWebModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
