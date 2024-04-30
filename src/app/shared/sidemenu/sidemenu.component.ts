import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'shared-side-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidemenu.component.html',
  styles: ``
})
export class SidemenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path)
    .filter(route => !route.path?.includes(':'))

  constructor() {
    // const dashboardMenu = routes
    //   .map(route => route.children ?? [])
    //   .flat()
    //   .filter(route => route && route.path)
    //   .filter(route => !route.path?.includes(':'))
  }
}
