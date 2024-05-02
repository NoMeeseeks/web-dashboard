import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  //
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, TitleComponent],
  template: `
  <app-title [title]="framework()"></app-title>
  
  <pre>
    {{ frameworkSignal() | json}}
  </pre>

  <pre>
    {{ frameworkProperty | json}}
  </pre>
  
`
})
export default class ChangeDetectionComponent {
  public framework = computed(() => `Change detection - ${this.frameworkSignal().name}`)

  public frameworkSignal = signal({
    name: 'Angular',
    releaseDate: 2016
  })

  public frameworkProperty = {
    name: 'Angular',
    releaseDate: 2016
  }

  constructor() {
    //forma tradicional
    setTimeout(() => {
      //forma antigua de hacer esto
      // this.frameworkProperty.name = 'React'


      //forma nueva con signals
      this.frameworkSignal.update(value => ({
        ...value,
        name: 'React'
      }))
      console.log('Hecho')
    }, 3000);


  }
}
