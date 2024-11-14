import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPeliculas } from '../pagina-web/Interfaces/IPelicula';
import { ISerie } from '../pagina-web/Interfaces/ISerie';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<IPeliculas[]> {
    return this.http.get<IPeliculas[]>('/data/Peliculas.json');
  }

  getSeries(): Observable<ISerie[]> {
    return this.http.get<ISerie[]>('/data/Series.json');
  }

  // get mensjae poner la ruta esta: https://jsonplaceholder.typicode.com/comments
  
}
