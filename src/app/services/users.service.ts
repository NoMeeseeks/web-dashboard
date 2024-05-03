import { Injectable, computed, inject, signal } from '@angular/core';
import { User, UsersResponse, UserResponse } from '../interfaces/request-response.interfaces';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs';

interface State {
  users: User[],
  loading: boolean
}
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private http = inject(HttpClient);

  #state = signal<State>({ loading: true, users: [] });

  public users = computed(() => this.#state().users)
  public loading = computed(() => this.#state().loading)

  constructor() {
    this.http.get<UsersResponse>("https://reqres.in/api/users")
      .pipe(delay(1500))
      .subscribe(respuesta => {
        this.#state.set({ loading: false, users: respuesta.data })
      })
  }

  getUserById(id: string) {
    //esto devuelve un un observable
    return this.http.get<UserResponse>(`https://reqres.in/api/users/${id}`)
      .pipe(
        delay(1500),
        map(resp => resp.data)
      )
  }
}
