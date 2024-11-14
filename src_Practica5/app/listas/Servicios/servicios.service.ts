import { Injectable } from '@angular/core';
import { IMensaje } from '../Interfaces/IMensaje';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) {}

  getMensajes(): Observable<IMensaje[]> {
    return this.http.get<IMensaje[]>('/data/Peliculas.json');
  }
}
