import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent {
  @Output() linkVisited: EventEmitter<string> = new EventEmitter<string>();

  activeLink: string | null = null;

  constructor(public languageService: LanguageService) { }

  visited(id: string) {
    this.activeLink = id;
    this.linkVisited.emit(id);
  }

}
