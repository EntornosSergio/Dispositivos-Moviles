import { Routes } from '@angular/router';
import { MensajeComponent } from './listas/mensaje/mensaje.component';
import { DetallesComponent } from './listas/detalles/detalles.component';

export const routes: Routes = [
    {path:'detalles/:id',component:DetallesComponent},
    {path:'**',component:MensajeComponent}
];
