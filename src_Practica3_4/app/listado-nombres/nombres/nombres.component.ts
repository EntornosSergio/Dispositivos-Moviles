import { Component } from '@angular/core';

@Component({
  selector: 'app-nombres',
  standalone: false,
  templateUrl: './nombres.component.html',
  styleUrl: './nombres.component.css'
})
export class NombresComponent {
  l_nombres:string[]=[];

  nombre:string=" ";

  addNombres(){
    if(this.nombre.trim()){
      this.l_nombres.push(this.nombre);
      this.nombre=" ";
    }
  }
  deleteName(){
    this.l_nombres = this.l_nombres.filter(string => string != this.nombre)
  }
}
