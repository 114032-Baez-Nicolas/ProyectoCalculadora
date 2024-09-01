import { Component } from '@angular/core';
import { CalcActionsComponent } from "../calc-actions/calc-actions.component";

@Component({
  selector: 'app-calc-view',
  standalone: true,
  imports: [CalcActionsComponent],
  templateUrl: './calc-view.component.html',
  styleUrl: './calc-view.component.css'
})
export class CalcViewComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  setNumero1(even:any){
    this.numero1 = Number(even.target.value);
  }

  setNumero2(even:any){
    this.numero2 = Number(even.target.value);
  }

  setResultado(rest: number){
    this.resultado = rest;
  }

  setLimpiar(){
    this.resultado = 0;
    this.numero1 = 0;
    this.numero2 = 0;
  }
}
