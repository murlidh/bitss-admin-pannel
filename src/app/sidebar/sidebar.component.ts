import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  isOpen = true; // Sidebar starts open
  selectedMenu = 'home'; // Default selected menu
  submenus: { [key: string]: boolean } = {
    about: false,
    services: false
  };

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }

  toggleSubmenu(menu: string) {
    this.submenus[menu] = !this.submenus[menu];
    this.selectedMenu = menu; // Highlight the parent menu item
  }

  selectMenu(menu: string) {
    this.selectedMenu = menu;
    Object.keys(this.submenus).forEach(key => {
      this.submenus[key] = false; // Close all submenus
    });
  }
}
