import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import OptionsBottomComponent from './ui/optionsBottom/optionsBottom.component';

@Component({
  selector: 'app-material',
  standalone: true,
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatBottomSheetModule,
  ],
  templateUrl: `./material.component.html`,
  styleUrl: './material.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class MaterialComponent {

  private _bottomSheet = inject(MatBottomSheet);

  openBottomSheet() {
    this._bottomSheet.open(OptionsBottomComponent);
  }
}
