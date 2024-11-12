import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { CommonModule } from '@angular/common';
import { SeriesComponent } from './series/series.component';
import { MenuComponent } from './menu/menu.component';
import { DetallesComponent } from './detalles/detalles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,PeliculasComponent,CommonModule,SeriesComponent,MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
