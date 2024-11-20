import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensajeComponent } from './mensaje/mensaje.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [MensajeComponent],
  imports: [
  CommonModule,RouterModule
  ],
  exports:[
    MensajeComponent
  ],
})
export class ListasModule { }
