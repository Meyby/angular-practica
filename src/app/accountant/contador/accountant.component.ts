import { Component } from "@angular/core";

@Component({
  selector: 'app-accountant',
  template: `
  <h1>{{ title }}</h1>

  <h3>La base es: {{ base }}</h3>
  
  <button (click)="store(base)">+ {{ base }}</button>
  
  <span>{{ numer }}</span>
  
  <button (click)="store(-base)">- {{ base }}</button>
  `
})

export class accountantComponent {
  constructor() {  }

  title: string = 'Contador App';
  numer: number = 0;

  base: number = 5;

  store(n: number): number {
    return this.numer += n;
  }

}