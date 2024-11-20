import { Component,OnInit } from '@angular/core';
import { IInicio } from '../Interfaces/IInicio';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ServiciosService } from '../Servicios/servicios.service';

@Component({
  selector: 'app-detalles',
  standalone: false,
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {

  lista:IInicio[]=[];
  nombre:string="";

  constructor(private router: ActivatedRoute, private data:ServiciosService){
    this.lista=this.data.getInfo()
  }
  /*
  ngOnInit(){
    this.router.paramMap.subscribe((params: ParamMap) => {
      this.nombre = params.get("nombre") || '';  // Obtenemos el id de la URL, si no está, se asigna un string vacío
    });
  }
*/
  objeto: IInicio | undefined

       ngOnInit(){
           
          let nom = this.router.snapshot.paramMap.get('nombre');
           //let numericId =  Number(id) ; //En este caso el parámetro es un ID numérico, este paso sólo sirve para parsear a número
           this.data.getMensajes().subscribe(
           lista=>{
               this.objeto=lista.find(x=>x.nombre==nom); //x.id significa id guardado en el objeto dentro del json, no la id que pasamos como parámetro. Eso está guardado en numericID
               }
           );
       }
}