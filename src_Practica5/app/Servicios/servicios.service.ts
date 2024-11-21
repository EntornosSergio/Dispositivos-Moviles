import { Injectable } from '@angular/core';
import { IMensaje } from '../listas/Interfaces/IMensaje';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {

  list: IMensaje[]=[];

  constructor(private http: HttpClient) {}

  getMensajes(): Observable<IMensaje[]> {
    return this.http.get<IMensaje[]>('/data/mensaje.json');
  }
  
  getInfo(): IMensaje[] {
    return this.list;
    }
}
