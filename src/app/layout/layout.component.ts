import { Component, HostListener } from '@angular/core';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  constructor(private headerService: HeaderService) {}

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    if (window.innerWidth >= 500) {
      this.headerService.toggleMenu(true);
    }
    if (window.innerWidth < 500) {
      this.headerService.toggleMenu(false);
    }
  }

  get menuOpen$() {
    return this.headerService.menuOpen.asObservable();
  }
}
