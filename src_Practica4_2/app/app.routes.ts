import { Routes } from '@angular/router';
import { HeroesComponent } from './Marvel/heroes/heroes.component';
import { InicioComponent } from './Marvel/inicio/inicio.component';
import { DetallesComponent } from './Marvel/detalles/detalles.component';

export const routes: Routes = [
    {path:'heroes',component:HeroesComponent},
    {path:'inicio',component:InicioComponent},
    {path:'detalles/:nombre',component:DetallesComponent},
    {path:'**',component:InicioComponent},

];
