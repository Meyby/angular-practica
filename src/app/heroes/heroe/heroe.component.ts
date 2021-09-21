import { Component } from "@angular/core";

@Component({
  selector: 'app-heroe',
  templateUrl: 'heroe.component.html'
})
export class HeroComponet {
  constructor() {  }

  name: string = 'Ironman';
  edad: number = 45;  

  
  get nombreCapitalizado() : string {
    return this.name.toUpperCase();
  }
  
  
  obtenerNombre(): string {
    return `${this.name} - ${this.edad}`
  }

  cambiarNombre(): void {
    this.name = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 30;
  }
};