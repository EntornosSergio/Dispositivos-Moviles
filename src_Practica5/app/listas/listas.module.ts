import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeComponent } from './mensaje/mensaje.component';
import { RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [MensajeComponent,DetallesComponent],
  imports: [
  CommonModule,RouterModule
  ],
  exports:[
    MensajeComponent,DetallesComponent
  ],
})
export class ListasModule { }
