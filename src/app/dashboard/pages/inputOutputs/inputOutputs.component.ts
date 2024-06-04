import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';
import { ProductCardComponent } from './ui/productCard/productCard.component';
import { Producto } from '../../../interfaces/producto.interfaces';
import { interval, take, tap } from 'rxjs';

@Component({
  selector: 'app-input-outputs',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
  ],
  templateUrl: './inputOutputs.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class InputOutputsComponent implements OnDestroy {

  public productos = signal<Producto[]>([
    {
      id: 1,
      name: 'Producto 1',
      quantity: 0,
    },
    {
      id: 2,
      name: 'Producto 2',
      quantity: 10,
    },
    {
      id: 3,
      name: 'Producto 3',
      quantity: 19,
    }
  ])

  private intervalSubscription = interval(1000).pipe(
    tap(() => {
      this.productos.update((productos) => [
        ...productos,
        {
          id: productos.length + 1,
          name: `Producto + ${productos.length + 1}`,
          quantity: 0,
        }
      ]);
    }),
    take(7)
  ).subscribe();

  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe();
  }

  public actualizarProducto(producto: Producto, cantidad: number) {
    this.productos.update((productos) =>
      productos.map((p) =>
        p.id === producto.id ? {
          ...p, quantity: cantidad
        } : p)
    );
  }
}
