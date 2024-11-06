import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NombresComponent } from './nombres/nombres.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [NombresComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports:[NombresComponent]

})
export class ListadoNombresModule { }
