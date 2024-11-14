import { Component } from '@angular/core';
import { IMensaje } from '../Interfaces/IMensaje';

@Component({
  selector: 'app-mensaje',
  standalone: false,
  templateUrl: './mensaje.component.html',
  styleUrl: './mensaje.component.css'
})
export class MensajeComponent {

  list: IMensaje[]=[];

  constructor(private servicioMe)
}
