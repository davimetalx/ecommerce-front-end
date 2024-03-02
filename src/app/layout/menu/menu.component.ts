import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuOpen = false;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.menuOpen$.subscribe(isOpen => this.menuOpen = isOpen);
  }

}
