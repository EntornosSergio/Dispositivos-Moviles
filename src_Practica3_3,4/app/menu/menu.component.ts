import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PeliculasComponent } from '../peliculas/peliculas.component';
import { SeriesComponent } from '../series/series.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,PeliculasComponent,SeriesComponent,RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
