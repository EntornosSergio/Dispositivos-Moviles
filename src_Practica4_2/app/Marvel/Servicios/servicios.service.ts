import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IInicio } from '../Interfaces/IInicio';

@Injectable({
  providedIn: 'root'
})

export class ServiciosService {
  list: IInicio[]=[];

  constructor(private http: HttpClient) {}

  getMensajes(): Observable<IInicio[]> {
    return this.http.get<IInicio[]>('/data/informacion.json');
  }

  getInfo(): IInicio[] {
    return this.list;
    }
  
  
}
