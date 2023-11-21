import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  menuOpen = new BehaviorSubject<boolean>(true);

  constructor() {}

  toggleMenu(bool?: boolean) {
    this.menuOpen.next(bool ?? !this.menuOpen.value);
  }
}
