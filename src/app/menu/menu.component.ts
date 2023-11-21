import { Component } from '@angular/core';
import { MenuItem } from './interfaces/menu-item.interface';
import { HeaderService } from '../header/header.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuItems: MenuItem[] = [
    { label: 'Home', icon: 'icon', route: 'home' },
    { label: 'Gallery', icon: 'icon', route: 'gallery' },
    { label: 'About', icon: 'icon', route: 'about' },
    { label: 'Contact', icon: 'icon', route: 'contact' },
  ];

  constructor(private headerService: HeaderService) {}

  closeMenu() {
    if (window.innerWidth <= 500) {
      this.headerService.toggleMenu(false);
    }
  }
}
