import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetallesComponent } from './detalles/detalles.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterLink, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';



@NgModule({
  declarations: [DetallesComponent,InicioComponent,MenuComponent,PeliculasComponent,SeriesComponent],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    DetallesComponent,InicioComponent,MenuComponent,PeliculasComponent,SeriesComponent
  ],
})
export class PaginaWebModule {

 }
