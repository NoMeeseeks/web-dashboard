import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitleComponent } from '@shared/title/title.component';
import { toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './user.component.html',
})
export default class UserComponent {

  // public user = signal<User | undefined>(undefined)

  private route = inject(ActivatedRoute)
  private userServices = inject(UsersService)

  //permite tomar un observable y regresar un signal
  public user = toSignal(this.route.params.pipe(switchMap(({ id }) => this.userServices.getUserById(id))))


  // public usuario = computed(() => `${this.user()?.first_name}-${this.user()?.last_name}`)
  public usuario = computed(() => {
    if (this.user()) {
      return `${this.user()?.first_name}-${this.user()?.last_name}`
    }

    return 'Informacion del usuario'
  })

  constructor() {
    // console.log(this.router.params.subscribe(params => {
    //   console.log(params)
    // }))
  }

}
