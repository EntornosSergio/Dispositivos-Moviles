import { Component } from '@angular/core';
import { IMensaje } from '../Interfaces/IMensaje';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiciosService } from '../../Servicios/servicios.service';

@Component({
  selector: 'app-detalles',
  standalone: false,
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {

  lista:IMensaje[]=[];
  id:string =" ";

  constructor(private router: ActivatedRoute, private data:ServiciosService){
    this.data.getMensajes().subscribe((listaMensajes)=>{
      listaMensajes.forEach((s) => this.lista.push(s));
    })
  }
 

  ngOnInit(){
           /*
    let id = this.router.snapshot.paramMap.get('id');
     //let numericId =  Number(id) ; //En este caso el parámetro es un ID numérico, este paso sólo sirve para parsear a número
     this.data.getMensajes().subscribe(
     lista=>{
         this.objeto=lista.find(x=>x.nombre==id); //x.id significa id guardado en el objeto dentro del json, no la id que pasamos como parámetro. Eso está guardado en numericID
         }
        );*/
      this.router.paramMap.subscribe((params:ParamMap)=>{
        this.id = params.get("id") || " ";
      })
      
      }
}

