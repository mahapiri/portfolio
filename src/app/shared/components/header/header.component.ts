import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BurgerMenuComponent } from '../../../burger-menu/burger-menu.component';
import { LanguageService } from '../../../services/language/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, BurgerMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', './header-mobile.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public languageService: LanguageService) { }

  activeLink: string | null = null;
  clickedMenu: boolean = false;
  clickedLanguage: boolean = false;

  ngOnInit(): void {

  }

  visited(id: string) {
    this.activeLink = id;
  }

  openMenu() {
    this.clickedMenu = !this.clickedMenu;
  }

  openLanguage() {
    this.clickedLanguage = !this.clickedLanguage;
  }
}
