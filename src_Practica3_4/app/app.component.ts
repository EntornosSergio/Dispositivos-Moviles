import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListadoNombresModule } from './listado-nombres/listado-nombres.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListadoNombresModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
