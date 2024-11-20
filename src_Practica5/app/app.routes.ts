import { Routes } from '@angular/router';
import { MensajeComponent } from './listas/mensaje/mensaje.component';

export const routes: Routes = [
    {path:'**',component:MensajeComponent}
];
