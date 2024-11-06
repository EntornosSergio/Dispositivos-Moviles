import { Component } from '@angular/core';
import { IInicio } from './IInicio';
@Component({
  selector: 'app-inicio',
  standalone: false,
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  list:IInicio[]=[];
  constructor(){
    this.list=[
      {
        nombre: "Lobezno",
        image: "imagenes/Lobezno-Wolverine.gif"
      },
      {
        nombre: "DareVil",
        image: "imagenes/darevil.gif"
      },
      {
        nombre: "Venom",
        image: "imagenes/venom.gif"
      },
      {
        nombre: "Capitán América",
        image: "imagenes/Capitan-America.jpg"
      },
      {
        nombre: "Capitana Marvel",
        image: "imagenes/capitana marvel.jpeg"
      },
      {
        nombre: "DeadPool",
        image: "imagenes/deadpool.jpg"
      },
      {
        nombre: "Thor",
        image: "imagenes/thor.png"
        
      },
      {
        nombre: "Black Panther",
        image: "imagenes/blackpanter.jpg"
      }
    ]
  }
}
