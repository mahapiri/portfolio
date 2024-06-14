import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BurgerMenuComponent } from '../../../burger-menu/burger-menu.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  activeLink: string | null = null;

  visited(id: string) {
    this.activeLink = id;
  }

  openMenu() {
    
  }
}
