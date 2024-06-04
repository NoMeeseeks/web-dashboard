import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, effect, input, output } from '@angular/core';
import { Producto } from '../../../../../interfaces/producto.interfaces';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './productCard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {

  //esto es una se;al
  public producto = input.required<Producto>();

  public incrementarCantidad = output<number>();

  public incrementar() {
    this.incrementarCantidad.emit(this.producto().quantity + 1);
  }

  public loginEffect = effect(
    () => console.log(this.producto().name)

  )
}
