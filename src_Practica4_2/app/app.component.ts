import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MarvelModule } from './Marvel/marvel.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MarvelModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
