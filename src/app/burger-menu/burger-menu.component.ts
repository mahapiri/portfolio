import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { LanguageService } from '../services/language/language.service';

@Component({
  selector: 'app-burger-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './burger-menu.component.html',
  styleUrl: './burger-menu.component.scss'
})
export class BurgerMenuComponent implements OnInit {
  @Output() linkVisited: EventEmitter<string> = new EventEmitter<string>();

  activeLink: string | null = null;
  clickedMenu: boolean = false;
  clickedLanguage: boolean = false;

  constructor(public languageService: LanguageService) { }

  ngOnInit(): void {}


  /**
   * Toggles the language selection dropdown.
   * 
   * Toggles the `clickedLanguage` property between `true` and `false`,
   * effectively opening or closing the language selection dropdown.
   */
  openLanguage() {
    this.clickedLanguage = !this.clickedLanguage;
  }


  /**
   * Marks the provided link as visited and emits an event.
   * 
   * @param {string} id - The ID of the link to be marked as visited.
   */
  visited(id: string) {
    this.activeLink = id;
    this.linkVisited.emit(id);
  }

}
