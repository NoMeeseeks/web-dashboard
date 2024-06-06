import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-options-bottom',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatBottomSheetModule,

  ],
  template:
    `
  <mat-nav-list>
  <a href="https://keep.google.com/" mat-list-item (click)="openLink($event)">
    <span matListItemTitle>Google Keep</span>
    <span matLine>Add to a note</span>
  </a>

  <a href="https://docs.google.com/" mat-list-item (click)="openLink($event)">
    <span matListItemTitle>Google Docs</span>
    <span matLine>Embed in a document</span>
  </a>

  <a href="https://plus.google.com/" mat-list-item (click)="openLink($event)">
    <span matListItemTitle>Google Plus</span>
    <span matLine>Share with your friends</span>
  </a>

  <a href="https://hangouts.google.com/" mat-list-item (click)="openLink($event)">
    <span matListItemTitle>Google Hangouts</span>
    <span matLine>Show to your coworkers</span>
  </a>
</mat-nav-list>
  `,
  styleUrl: './optionsBottom.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OptionsBottomComponent {

  openLink(evento: MouseEvent) {
    console.log(evento);

  }

}
