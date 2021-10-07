import { Component } from '@angular/core';
import { IPersonaje } from '../../shared/models/personaje.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})

export class MainPageComponent { 
  personajes: IPersonaje[] = [
    {
      nombre: 'Krillin',
      poder: 700,
    },
    {
      nombre: 'Goku',
      poder: 15.000,
    },
    {
      nombre: 'Vegeta',
      poder: 8.500,
    }
  ];

  nuevo: IPersonaje = {
    nombre: '',
    poder: 0
  }

  agregar() {
  
    if (this.nuevo.nombre.trim().length === 0 ) { return; }

    this.personajes.push(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }

  }
}
