import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent  {
  heroes: string[] = ['spiderman', 'Ironman', 'hulk', 'thor'];
  eliminado: string = '';

  borrarHeroe() {
    this.eliminado = this.heroes.shift() || '';
    return this.eliminado;
  }

}
