import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes/heroes.component';
import { InicioComponent } from './inicio/inicio.component';
import { RouterLink, RouterModule } from '@angular/router';
import { DetallesComponent } from './detalles/detalles.component';



@NgModule({
  declarations: [
    InicioComponent, HeroesComponent, DetallesComponent
  ],

  imports: [
    CommonModule, RouterModule,RouterLink
  ],
  exports:[
    InicioComponent, HeroesComponent, DetallesComponent
  ],
})
export class MarvelModule { 


}
