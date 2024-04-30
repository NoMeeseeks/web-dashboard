import { Component, signal } from '@angular/core';

type Grade = 'A' | 'B' | 'C';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false)
  public actualGrade = signal<Grade>('A')
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React'])
  public frameworks2 = signal([])
  public toggleContent() {
    this.showContent.update(value => !value)
  }
}
