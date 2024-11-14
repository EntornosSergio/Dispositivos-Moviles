import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPeliculas } from '../Interfaces/IPelicula'; 

@Component({
  selector: 'app-detalles',
  standalone: false,
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent implements OnInit {

  pelicula!: IPeliculas; 

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const index = +params['index']; 
    });
  }
}
