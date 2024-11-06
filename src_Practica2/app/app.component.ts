import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AsignaturaComponentComponent } from './componentes/asignatura-component/asignatura-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsignaturaComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
