import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private menuOpenSubject = new BehaviorSubject<boolean>(false);
  menuOpen$ = this.menuOpenSubject.asObservable();

  constructor() { }

  toggleMenu(): void {
    this.menuOpenSubject.next(!this.menuOpenSubject.value);
  }
  
}
