import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { HeroComponet } from './heroe/heroe.component';

@NgModule({
  declarations: [
    HeroComponet,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoComponent
  ]
})
export class HeroesModule { }
