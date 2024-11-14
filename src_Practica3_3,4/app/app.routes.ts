import { Routes } from '@angular/router';
import { InicioComponent } from './pagina-web/inicio/inicio.component';
import { SeriesComponent } from './pagina-web/series/series.component';
import { PeliculasComponent } from './pagina-web/peliculas/peliculas.component';
import { DetallesComponent } from './pagina-web/detalles/detalles.component';

export const routes: Routes = [
    {path:'series',component:SeriesComponent},
    {path:'detalles',component:DetallesComponent},
    {path:'peliculas',component:PeliculasComponent},
    {path:'inicio',component:InicioComponent},
    {path:'**',component:InicioComponent}
];
