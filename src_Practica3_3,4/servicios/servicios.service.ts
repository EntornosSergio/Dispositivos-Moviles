import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPeliculas } from '../app/peliculas/IPelicula';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  ListaPeliculas:IPeliculas[];
  constructor(private http: HttpClient) {
    this.ListaPeliculas=[];
   }

   getPeliculas(): IPeliculas[] {
    this.http.get<IPeliculas[]>("../data/Peliculas.json").subscribe(
      l=> { l.forEach(e=>this.ListaPeliculas.push(e))}

    )
    return this.ListaPeliculas;
   }
}
