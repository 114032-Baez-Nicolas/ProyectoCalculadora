import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calc-actions',
  standalone: true,
  imports: [],
  templateUrl: './calc-actions.component.html',
  styleUrl: './calc-actions.component.css'
})
export class CalcActionsComponent {

  @Input() numero1 = 0;
  @Input() numero2 = 0;
  @Output() resultado = new EventEmitter<number>();
  @Output() limpar = new EventEmitter<void>();

  onSuma() {
    this.resultado.emit(this.numero1 + this.numero2);
  }

  onResta(){
    this.resultado.emit(this.numero1 - this.numero2);
  }

  onMultiplicar(){
    this.resultado.emit(this.numero1 * this.numero2);
  }

  onDividir(){
    this.resultado.emit(this.numero1 / this.numero2);
  }

  onPotencia(){
    this.resultado.emit(Math.pow(this.numero1, this.numero2));
  }

  onLimpiar(){
    this.limpar.emit();
  }
}
