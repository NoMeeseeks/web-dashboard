import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title title="view transition"/>

  <section class="flex justify-end">
<img srcset="https://picsum.photos/id/237/200/300" alt="picsum" width="200" height="300" style="view-transition-name: hero1;">
<div class="bg-blue-700 w-32 h=32 rounded fixed bottom-2 right-10" style="view-transition-name: hero2;">

</div>
  </section>

  `

})
export default class ViewTransitionComponent {

}
