import { Component } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private menuService: MenuService) {}

  openMenu() {
    this.menuService.toggleMenu();
  }

}
