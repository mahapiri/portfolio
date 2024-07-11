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

  ngOnInit(): void {

  }


  openLanguage() {
    this.clickedLanguage = !this.clickedLanguage;
  }


  visited(id: string) {
    this.activeLink = id;
    this.linkVisited.emit(id);
  }

}
