import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1 class="text-3xl mb-5">{{title}} - {{withShadow}}</h1>
  `

})
export class TitleComponent {

  //es una nueva forma
  @Input({ required: true }) title!: string;

  //propiedad nueva
  @Input({ transform: booleanAttribute }) withShadow: boolean = false;
}
