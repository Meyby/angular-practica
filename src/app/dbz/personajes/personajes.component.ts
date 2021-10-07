import { Component, Input } from '@angular/core';
import { IPersonaje } from 'src/app/shared/models/personaje.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {
  
  @Input()  personajes: IPersonaje[] = [];

}
