import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListasModule } from './listas/listas.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListasModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ejemplo_1';
}
