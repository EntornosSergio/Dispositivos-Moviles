import { Routes } from '@angular/router';
import { INICIOComponent } from './inicio/inicio.component';
import { SeriesComponent } from './series/series.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { DetallesComponent } from './detalles/detalles.component';

export const routes: Routes = [
    {path:'series',component:SeriesComponent},
    {path:'detalles',component:DetallesComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path:'inicio',component:INICIOComponent},
    {path:'**',component:INICIOComponent}
];
