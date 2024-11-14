import { Component } from '@angular/core';
import { ISerie } from '../Interfaces/ISerie';
import { ServiciosService } from '../../servicios/servicios.service';

@Component({
  selector: 'app-series',
  standalone: false,
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  list1:ISerie[]=[];


  constructor(private servicioSeries: ServiciosService) {}

  ngOnInit(): void {
    this.servicioSeries.getSeries().subscribe({
      next: (series: ISerie[]) => this.list1 = series,
      error: (error) => console.error('Error al cargar series', error)
    });
  }

}
